import React from "react";
import Link from "next/link";
import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type NavMenuProps = {
  setActiveComponent: (component: string) => void;
  isActive: (component: string) => boolean;
};

const NavMenu: React.FC<NavMenuProps> = ({ setActiveComponent, isActive }) => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="#"
        onClick={() => setActiveComponent("Dashboard")}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
          isActive("Dashboard")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="#"
        onClick={() => setActiveComponent("Orders")}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
          isActive("Orders") ? "bg-muted text-primary" : "text-muted-foreground"
        }`}
      >
        <ShoppingCart className="h-4 w-4" />
        Orders
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href="#"
        onClick={() => setActiveComponent("NoProduct")}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
          isActive("NoProduct")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
      >
        <Package className="h-4 w-4" />
        Products{" "}
      </Link>
      <Link
        href="#"
        onClick={() => setActiveComponent("Customers")}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
          isActive("customers")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
      >
        <Users className="h-4 w-4" />
        Customers
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
          isActive("Analytics")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
      >
        <LineChart className="h-4 w-4" />
        Analytics
      </Link>
      <Link
        href="#"
        onClick={() => setActiveComponent("BillingInfo")}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
          isActive("BillingInfo")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
      >
        <Users className="h-4 w-4" />
        My Billing
      </Link>
      <Link
        href="#"
        onClick={() => setActiveComponent("MyAccount")}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
          isActive("MyAccount")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
      >
        <Users className="h-4 w-4" />
        My Info
      </Link>
    </nav>
  );
};

export default NavMenu;
