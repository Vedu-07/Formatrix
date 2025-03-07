import { Button } from "@/components/ui/button";

export default function Dashboard() {
    return (
      <div className="w-4 pt-8">
        <div className="w-full max-w-6xl mx-auto pt-1 px-2 md:px-0">
          {/* Form Stats */}
            <section className="stats-section w-full">
                <div className="flex items-center justify-between py-5">
                  <h1 className="text-3xl font-semibold tracking-tighter">Dashboard</h1>
                  <Button>Create Form</Button>
                </div>
            </section>
        </div>
      </div>
    );
  }