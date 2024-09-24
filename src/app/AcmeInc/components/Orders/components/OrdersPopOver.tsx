import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"

type OrdersPopOverProps = {
  date: Date;
  setDate: (date: Date) => void;
};

const OrdersPopOver: React.FC<OrdersPopOverProps> = ({ date, setDate }) => {
  return (
    <div>
                <Popover >
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "s:max-w-[120px] xs:w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(day: Date | undefined) => {
                if (day) {
                  setDate(day);
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
    </div>
  )
}

export default OrdersPopOver