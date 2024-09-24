import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Package, Receipt, AlertCircle } from "lucide-react";
import BillingCard from "../components/BillingCard";

export default function BillingInfo() {
  return (
    <Card className="mx-auto w-full my-2 s:max-w-xs md:max-w-3xl">
      <CardHeader>
        <CardTitle>Billing Information</CardTitle>
        <CardDescription>
          Manage your subscription and payment details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Current Plan</h3>
              <p className="text-sm text-muted-foreground">
                You are currently on the Pro plan
              </p>
            </div>
            <Badge variant="secondary" className="text-sm">
              Pro
            </Badge>
          </div>
          <div className="flex space-x-2 s:flex-col s:gap-2 md:flex-row md:items-start">
            <Button variant="outline">
              <Package className="mr-2 h-4 w-4" />
              Change Plan
            </Button>
            <Button variant="outline" className="s:!m-0">
              Cancel Subscription
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between s:flex-col s:items-start s:gap-2 md:flex-row">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Payment Method</h3>
            <div className="flex items-center space-x-4">
              <CreditCard className="size-8" />
              <div>
                <p className="font-medium">Visa ending in 1234</p>
                <p className="text-sm text-muted-foreground">Expires 12/2024</p>
              </div>
            </div>
            <Button variant="outline">Update Payment Method</Button>
          </div>
          <BillingCard />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Billing History</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Invoice</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: "2023-05-01", amount: "$29.99", status: "Paid" },
                { date: "2023-04-01", amount: "$29.99", status: "Paid" },
                { date: "2023-03-01", amount: "$29.99", status: "Paid" },
              ].map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Receipt className="mr-2 size-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter>
        <p className="flex items-center text-sm text-muted-foreground">
          <AlertCircle className="mr-2 size-4" />
          Billing cycle renews on June 1, 2023
        </p>
      </CardFooter>
    </Card>
  );
}
