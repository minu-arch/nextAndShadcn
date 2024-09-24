import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const OrdersDropDown = () => {
  return (
    <div>
                <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Order ID
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              Customer
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Status</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Total</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              Payment Status
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Date</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default OrdersDropDown