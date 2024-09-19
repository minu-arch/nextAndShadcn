import { LoginForm } from "@/components/login-form";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Page() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex h-screen w-full items-center justify-center px-4">
        <div className="absolute right-2 top-2">
          <ModeToggle />
        </div>
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}
