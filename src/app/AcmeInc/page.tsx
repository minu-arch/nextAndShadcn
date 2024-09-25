"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, memo } from "react";
import AcmeInc from "./components/AcmeInc";
import UpgradePro from "./components/UpgradePro";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Main from "./components/Main";
import { ThemeProvider } from "@/components/theme-provider";

const DashboardHome = dynamic(() => import("./components/DashboardHome"), {
  ssr: false,
});
const BillingInfo = dynamic(() => import("./pages/BillingInfo"), {
  ssr: false,
});
const NoProduct = dynamic(() => import("./pages/NoProduct"), { ssr: false });
const MyAccount = dynamic(() => import("./pages/MyAccount"), { ssr: false });

const MemoizedAcmeInc = memo(AcmeInc);
const MemoizedUpgradePro = memo(UpgradePro);
const MemoizedHeader = memo(Header);
const MemoizedNavMenu = memo(NavMenu);
const MemoizedMain = memo(Main);
const MemoizedThemeProvider = memo(ThemeProvider);

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
}

interface MainProps {
  activeComponent: string;
  data: Customer[];
}

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Inventory");
  const [data, setData] = useState<Customer[]>([]);
  const isActive = (component: string) => activeComponent === component;

  useEffect(() => {
    // Fetch data from the API
    fetch("/api/customers")
      .then((response) => response.json())
      .then((data) => {
        // Validare a datelor primite
        if (
          Array.isArray(data) &&
          data.every(
            (item) =>
              typeof item.id === "number" &&
              typeof item.name === "string" &&
              typeof item.email === "string" &&
              typeof item.status === "string",
          )
        ) {
          setData(data);
        } else {
          console.error("Datele primite nu respectă structura așteptată.");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <MemoizedThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <MemoizedAcmeInc />
            <div className="flex-1">
              <MemoizedNavMenu
                setActiveComponent={setActiveComponent}
                isActive={isActive}
              />
            </div>
            <MemoizedUpgradePro />
          </div>
        </div>
        <div className="flex flex-col">
          <MemoizedHeader
            setActiveComponent={setActiveComponent}
            isActive={isActive}
          />
          <MemoizedMain activeComponent={activeComponent} />
        </div>
      </div>
    </MemoizedThemeProvider>
  );
}
