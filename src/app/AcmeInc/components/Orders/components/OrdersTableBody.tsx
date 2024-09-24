import React from 'react'
import { TableBody, TableRow, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { Order } from '@/app/AcmeInc/props/OrdersTableProps'

type OrdersTableBodyProps = {
    orders: Order[];
  };
  

const OrdersTableBody: React.FC<OrdersTableBodyProps> = ({ orders }) => {

  return (
    <TableBody>
    {orders.map((order: Order) => (
      <TableRow key={order.id}>
        <TableCell className="font-medium">{order.id}</TableCell>
        <TableCell>{order.customer}</TableCell>
        <TableCell>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
              order.status === "Processing" &&
                "bg-yellow-100 text-yellow-800",
              order.status === "Shipped" && "bg-blue-100 text-blue-800",
              order.status === "Delivered" &&
                "bg-green-100 text-green-800",
              order.status === "Cancelled" && "bg-red-100 text-red-800",
            )}
          >
            {order.status}
          </span>
        </TableCell>
        <TableCell>${order.total.toFixed(2)}</TableCell>
        <TableCell>{order.paymentStatus}</TableCell>
        <TableCell>{format(order.date, "MMM dd, yyyy")}</TableCell>
        <TableCell className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Update status</DropdownMenuItem>
              <DropdownMenuItem>Contact customer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  )
}

export default OrdersTableBody