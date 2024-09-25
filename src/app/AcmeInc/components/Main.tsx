import React, { Suspense } from "react";
import dynamic from "next/dynamic";

type MainProps = {
  activeComponent: string;
};

const DashboardHome = dynamic(() => import("./DashboardHome"), {
  suspense: true,
});
const BillingInfo = dynamic(() => import("../pages/BillingInfo"), {
  suspense: true,
});
const NoProduct = dynamic(() => import("../pages/NoProduct"), {
  suspense: true,
});
const Customers = dynamic(() => import("./Customers/Page"), {
  suspense: true,
});
const MyAccount = dynamic(() => import("../pages/MyAccount"), {
  suspense: true,
});
const Orders = dynamic(() => import("./Orders/page"), {
  suspense: true,
});
const getTitle = (activeComponent: string) => {
  switch (activeComponent) {
    case "Dashboard":
      return "Dashboard";
    case "BillingInfo":
      return "Billing Information";
    case "NoProduct":
      return "My Products";
    case "Customers":
      return "Customers";
    case "MyAccount":
      return "My Account";
    case "Orders":
      return "Orders";
    default:
      return "Inventory";
  }
};
const Main: React.FC<MainProps> = ({ activeComponent }) => {
  return (
    <main className="flex size-full flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          {getTitle(activeComponent)}
        </h1>
      </div>
      <div
        x-chunk="An empty state showing no products with a heading, description and a call to action to add a product."
        className="flex flex-1 items-center justify-center rounded-lg shadow-sm md:border md:border-dashed"
      >
        <Suspense fallback={<div>Loading...</div>}>
          {activeComponent === "Dashboard" && <DashboardHome />}
          {activeComponent === "BillingInfo" && <BillingInfo />}
          {activeComponent === "NoProduct" && <NoProduct />}
          {activeComponent === "Customers" && <Customers />}
          {activeComponent === "MyAccount" && <MyAccount />}
          {activeComponent === "Orders" && <Orders />}
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
