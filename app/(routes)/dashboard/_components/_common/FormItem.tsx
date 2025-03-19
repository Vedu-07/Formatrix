"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ActivityIcon,
  Globe,
  LockKeyholeIcon,
  MessageSquare,
  Trash2,
} from "lucide-react";
import { formatDistanceToNowStrict } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { deleteForm } from "@/actions/form-action";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type PropsType = {
  id: number;
  formId: string;
  name: string;
  responses: number;
  views: number;
  createdAt: Date;
  published: boolean;
  backgroundColor: string;
};

const FormItem = (props: PropsType) => {
    const { id, formId, name, published, createdAt, responses = 0, views = 0 } =
      props;
  
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
  
    // Navigate to form builder
    const onClick = useCallback((e: React.MouseEvent) => {
      // Only navigate if not loading and the click is not from the delete button
      if (!loading && !e.defaultPrevented) {
        router.push(`/dashboard/form/builder/${formId}`);
      }
    }, [loading, router, formId]);
  
    // Delete form function
    const handleDelete = async (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent navigation when clicking delete
      setLoading(true);
  
      const res = await deleteForm(formId);
  
      if (res.success) {
        setOpen(false);
        router.refresh(); // Refresh dashboard after deletion
      } else {
        alert(res.message);
      }
  
      setLoading(false);
    };
  
    // Cancel delete
    const handleCancelDelete = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent navigation when clicking cancel
      setOpen(false); // Close the dialog
    };
  
    return (
      <div onClick={onClick} role="button" className="w-full h-auto">
        <div
          className="w-full relative flex 
        items-center justify-center
        overflow-hidden h-[150px] rounded-t-xl border border-gray-300
        bg-gradient-to-b from-primary/10 to-primary/10"
        >
          <div
            className=" w-36 absolute bottom-0 flex items-center 
          flex-col px-4 pt-6 h-32 rounded-t-xl
           bg-white shadow-lg"
          >
            <h5
              className="text-sm font-medium mb-1 text-center
            text-gray-400 truncate block w-[200px]">
              {name}
            </h5>
            {[0, 1, 2].map((item) => (
              <div key={item} className="flex items-center gap-1 mb-2">
                <Skeleton className="h-3 w-3 rounded-full shrink-0" />
                <Skeleton className="h-[11px] w-[75px]" />
              </div>
            ))}
          </div>
        </div>
  
        {/* Form Info and Actions */}
        <div className="w-full py-0">
          <div className="flex w-full items-center justify-between py-1">
            <span className="text-sm flex items-center gap-1 font-medium">
              {published ? (
                <Globe className="text-muted-foreground size-3" />
              ) : (
                <LockKeyholeIcon className="text-muted-foreground size-3" />
              )}
              {name}
            </span>
  
            {/* Delete Button (opens dialog) */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event propagation
                    setOpen(true); // Open the dialog
                  }} 
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Form</DialogTitle>
                  <p className="text-gray-500">
                    Are you sure you want to delete this form? This action cannot
                    be undone.
                  </p>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={handleCancelDelete} // Stop event propagation and close dialog
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleDelete} // Handle delete action
                    disabled={loading}
                  >
                    {loading ? "Deleting..." : "Delete"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
  
          <div
            className="flex w-full border-t border-gray-300
          items-center justify-between py-1"
          >
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground flex items-center gap-1 text-[14px]">
                {responses}
                <MessageSquare className="text-muted-foreground size-[14px]" />
              </span>
  
              <span className="text-muted-foreground flex items-center gap-1 text-[14px]">
                {views}
                <ActivityIcon className="text-muted-foreground size-[14px]" />
              </span>
            </div>
            <span className="text-muted-foreground flex gap-1 text-[13px]">
              {formatDistanceToNowStrict(new Date(createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default FormItem;