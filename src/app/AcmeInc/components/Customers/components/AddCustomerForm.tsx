import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'

type AddCustomerFormProps = {
  onClose: () => void
  onAddCustomer: (customer: { id?: number, name: string, email: string, status: string }) => void
  initialData?: { id: number, name: string, email: string, status: string }
}

const AddCustomerForm: React.FC<AddCustomerFormProps> = ({ onClose, onAddCustomer, initialData }) => {
  const [name, setName] = useState(initialData?.name || '')
  const [email, setEmail] = useState(initialData?.email || '')
  const [status, setStatus] = useState(initialData?.status || 'Active')

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
      setStatus(initialData.status)
    }
  }, [initialData])

  const handleAddCustomer = () => {
    onAddCustomer({ id: initialData?.id, name, email, status })
    onClose()
  }

  return (
    <div>
      <h2>{initialData ? 'Edit Customer' : 'Add New Customer'}</h2>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2"
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2"
      />
      <Select value={status} onValueChange={(value) => setStatus(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      <div className='flex gap-2 items-start mt-4'>
        <Button onClick={handleAddCustomer}>{initialData ? 'Update' : 'Add'}</Button>
        <Button onClick={onClose} variant="secondary">Cancel</Button>
      </div>
    </div>
  )
}

export default AddCustomerForm