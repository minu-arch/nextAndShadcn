import React from "react";
import {
  Package2,
  Home,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  CircleUser,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { Menu } from "lucide-react";
import UpgradePro from "./UpgradePro";
import { HeaderProps } from "../props/HeaderProps";

const Header: React.FC<HeaderProps> = ({ setActiveComponent, isActive }) => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex h-full flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              onClick={() => setActiveComponent("Dashboard")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                isActive("Dashboard")
                  ? "bg-muted text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              onClick={() => setActiveComponent("Orders")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                isActive("Orders")
                  ? "bg-muted text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
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
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="#"
              onClick={() => setActiveComponent("Customers")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                isActive("Customers")
                  ? "bg-muted text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Users className="h-5 w-5" />
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
              <LineChart className="h-5 w-5" />
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
          <UpgradePro />
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
