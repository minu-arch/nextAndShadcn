import React from 'react'
import { Search, UserPlus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import AddCustomerForm from './AddCustomerForm'

type SearchCusotmersProps = {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  onAddCustomer: (customer: { name: string, email: string, status: string }) => void
}

const SearchCusotmers: React.FC<SearchCusotmersProps> = ({ searchTerm, setSearchTerm, onAddCustomer }) => {
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false)

  return (
    <div className="mb-2 mx-auto flex md:justify-between items-center s:justify-start s:gap-2">
      <div className="relative w-64 s:w-44">
        <Search className="absolute left-2 top-2.5 h-4 w-4  text-muted-foreground" />
        <Input
          placeholder="Search customers"
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Button onClick={() => setShowAddCustomerForm(true)}>
        <UserPlus className="mr-2 h-4 w-4" />
        Add Customer
      </Button>
      {showAddCustomerForm && (
        <div className="absolute top-0 right-0 lg:right-16 lg:top-20">
          <Card className='p-4'>
          <AddCustomerForm onClose={() => setShowAddCustomerForm(false)} onAddCustomer={onAddCustomer} />
          </Card>
        </div>
      )}
    </div>
  )
}

export default SearchCusotmers