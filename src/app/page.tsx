import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <div className="flex h-[100vh] w-[100vw] flex-col items-center font-blinker">
          <div className="absolute right-2 top-2">
            <ModeToggle />
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-wide">Home</h1>
          <div className="mt-5 flex flex-col gap-1">
            <Link
              href="/cards"
              className="text-xl hover:underline hover:decoration-green-500"
            >
              Cards
            </Link>
            <Link
              href="/login"
              className="text-xl hover:underline hover:decoration-green-500"
            >
              Login
            </Link>
            <Link
              href="/about"
              className="text-xl hover:underline hover:decoration-green-500"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
