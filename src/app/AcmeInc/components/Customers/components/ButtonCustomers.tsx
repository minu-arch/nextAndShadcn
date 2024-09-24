import React from 'react'
import { Button } from '@/components/ui/button'
const ButtonCustomers = () => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
    <Button variant="outline" size="sm">
      Previous
    </Button>
    <Button variant="outline" size="sm">
      Next
    </Button>
  </div>
  )
}

export default ButtonCustomers