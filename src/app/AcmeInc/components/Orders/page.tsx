"use client";

import { useState } from "react";
import {
  Table,
} from "@/components/ui/table";
import OrdersPopOver from "./components/OrdersPopOver";
import OrdersDropDown from "./components/OrdersDropDown";
import OrdersTableHeader from "./components/OrdersTableHeader";
import OrdersTableBody from "./components/OrdersTableBody";
import { Order } from "@/app/AcmeInc/props/OrdersTableProps";



const orders: Order[] = [
  {
    id: "1",
    customer: "John Doe",
    status: "Processing",
    total: 125.99,
    paymentStatus: "Paid",
    date: new Date("2023-06-01"),
  },
  {
    id: "2",
    customer: "Jane Smith",
    status: "Shipped",
    total: 239.99,
    paymentStatus: "Paid",
    date: new Date("2023-06-02"),
  },
  {
    id: "3",
    customer: "Bob Johnson",
    status: "Delivered",
    total: 59.99,
    paymentStatus: "Paid",
    date: new Date("2023-06-03"),
  },
  {
    id: "4",
    customer: "Alice Brown",
    status: "Cancelled",
    total: 89.99,
    paymentStatus: "Refunded",
    date: new Date("2023-06-04"),
  },
  {
    id: "5",
    customer: "Charlie Wilson",
    status: "Processing",
    total: 199.99,
    paymentStatus: "Pending",
    date: new Date("2023-06-05"),
  },
];

export default function Orders (){
  const [date, setDate] = useState<Date>();

  return (
    <div className="container p-2 s:max-w-[320px] md:max-w-[640px] lg:max-w-screen-2xl">
      <h1 className="mb-5 text-2xl font-bold">Orders</h1>
      <div className="mb-4 flex items-center justify-between">
        <OrdersPopOver date={date as Date} setDate={setDate} />
        <OrdersDropDown />
      </div>
      <div className="rounded-md border">
        <Table>
          <OrdersTableHeader />
          <OrdersTableBody orders={orders} />
        </Table>
      </div>
    </div>
  );
}
