import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Head from "next/head";
import dynamic from "next/dynamic";
import { memo } from "react";

const DynamicLink = dynamic(() => import("next/link"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

// Componente memorate
const MemoizedModeToggle = memo(ModeToggle);

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >

      <div className="flex h-[100vh] w-[100vw] flex-col items-center font-blinker">
        <div className="absolute right-2 top-2">
          <MemoizedModeToggle />
        </div>

        <div className="mt-5 flex flex-col justify-center gap-1">
          <h1 className="mb-5 text-2xl font-semibold tracking-wide">Home</h1>
          <DynamicLink
            href="/cards"
            className="text-xl hover:underline hover:decoration-green-500"
          >
            Cards
          </DynamicLink>
          <DynamicLink
            href="/login"
            className="text-xl hover:underline hover:decoration-green-500"
          >
            Login
          </DynamicLink>
          <DynamicLink
            href="/about"
            className="text-xl hover:underline hover:decoration-green-500"
          >
            About
          </DynamicLink>
          <DynamicLink
            href="/AcmeInc"
            className="text-xl hover:underline hover:decoration-green-500"
          >
            AcmeInc
          </DynamicLink>
        </div>
      </div>
    </ThemeProvider>
  );
}
