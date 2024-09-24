import { useState } from "react"
import SearchCusotmers from "./components/SearchCusotmers"
import TableCustomers from "./components/TableCustomers"
import ButtonCustomers from "./components/ButtonCustomers"
import AddCustomerForm from "./components/AddCustomerForm"

const initialCustomers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Active" },
  { id: 4, name: "Diana Ross", email: "diana@example.com", status: "Active" },
  { id: 5, name: "Edward Norton", email: "edward@example.com", status: "Inactive" },
]

export default function CustomersManagement() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingCustomer, setEditingCustomer] = useState<{ id: number, name: string, email: string, status: string } | null>(null)

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddCustomer = (newCustomer: { name: string, email: string, status: string }) => {
    setCustomers([...customers, { id: customers.length + 1, ...newCustomer }])
  }

  const handleEditCustomer = (customer: { id: number, name: string, email: string, status: string }) => {
    setEditingCustomer(customer)
  }

  const handleUpdateCustomer = (updatedCustomer: { id: number, name: string, email: string, status: string }) => {
    setCustomers(customers.map(customer => customer.id === updatedCustomer.id ? updatedCustomer : customer))
    setEditingCustomer(null)
  }

  const handleDeleteCustomer = (id: number) => {
    setCustomers(customers.filter(customer => customer.id !== id))
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Customer Management</h1>

      <SearchCusotmers searchTerm={searchTerm} setSearchTerm={setSearchTerm} onAddCustomer={handleAddCustomer} />

      {editingCustomer && (
        <AddCustomerForm
          onClose={() => setEditingCustomer(null)}
          onAddCustomer={(customer) => handleUpdateCustomer({ id: editingCustomer!.id, ...customer })}
          initialData={editingCustomer}
        />
      )}

      <TableCustomers customers={filteredCustomers} onEditCustomer={handleEditCustomer} onDeleteCustomer={handleDeleteCustomer} />
      <ButtonCustomers />
    </div>
  )
}