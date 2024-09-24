import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import ChartMonth from "@/app/AcmeInc/components/ChartMonth";
import BillingCard from "@/app/AcmeInc/components/BillingCard";
import MyProfile from "./components/MyProfile/Page";
import BillingInfo from "./pages/BillingInfo";

export default async function Page() {
  const { cookies } = await import("next/headers");
  return (
    <SidebarLayout
      defaultOpen={cookies().get("sidebar:state")?.value === "true"}
    >
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed p-2">
          <SidebarTrigger />
          {/* Inside the main content*/}
          <div className="flex flex-col gap-2">
            <h1>Acme Corp</h1>

            <MyProfile />
            {/* <BillingInfo /> */}
          </div>

          {/* Inside the main content */}
        </div>
      </main>
    </SidebarLayout>
  );
}
