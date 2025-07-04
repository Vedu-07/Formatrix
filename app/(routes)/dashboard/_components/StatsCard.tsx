import { fetchFormStats } from "@/actions/form-action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "lucide-react";

const StatsCards = (props: {
  data: Awaited<ReturnType<typeof fetchFormStats>>;
  loading: boolean;
}) => {
  const { loading, data } = props;
  return (
    <div
      className="grid gap-4 
        sm:grid-cols-2 
        md:grid-cols-4 
          lg:grid-cols-2
           xl:grid-cols-4"
    >
      <Card className="bg-white">
        <CardHeader className="pb-2">
          <CardDescription>Total Forms</CardDescription>
          <CardTitle className="text-4xl">
            {loading ? (
              <Loader className="h-[36px] animate-spin" />
            ) : (
              data?.totalForms || 0
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            All forms created on your account
          </div>
        </CardContent>
      </Card>

      {/* Responses Card */}
      <Card className="bg-white">
        <CardHeader className="pb-2">
          <CardDescription>Total Responses</CardDescription>
          <CardTitle className="text-4xl">
            {loading ? (
              <Loader className="h-[36px] animate-spin" />
            ) : (
              data?.totalResponses || 0
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Responses submitted for your forms
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;