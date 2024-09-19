import React from "react";
import DigitalTransf from "./DigitalTransf";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Modal from "./Modal";
import DeleteConfirmation from "./DeleteConfirmation";
import TaskToDo from "./TaskToDo";

const page = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex h-[100vh] w-[100vw] flex-col items-center px-5">
        <div className="absolute right-2 top-2">
          <ModeToggle />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-wide">Cards</h1>
        <DigitalTransf />
        <Modal />
        <DeleteConfirmation />
        <TaskToDo />
      </div>
    </ThemeProvider>
  );
};

export default page;
