import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UpgradePro() {
  return (
    <div className="mt-auto fixed bottom-0 w-[280px] s:w-[230px] p-4 ">
      <Card x-chunk="A card with a call to action">
        <CardHeader className="p-2 pt-0 md:p-4 s:pt-4">
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
