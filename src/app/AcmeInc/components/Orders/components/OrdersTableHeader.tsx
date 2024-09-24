import React from 'react'
import { TableHeader, TableRow, TableHead, Table } from "@/components/ui/table"

const OrdersTableHeader = () => {
  return (
    <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Order ID</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Total</TableHead>
      <TableHead>Payment Status</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  )
}

export default OrdersTableHeader