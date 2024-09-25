import { NextApiRequest, NextApiResponse } from "next";

let customers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    status: "Active",
  },
  { id: 4, name: "Diana Ross", email: "diana@example.com", status: "Active" },
  {
    id: 5,
    name: "Edward Norton",
    email: "edward@example.com",
    status: "Inactive",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Returnează lista de utilizatori
    res.status(200).json(customers);
  } else if (req.method === "POST") {
    // Adaugă un nou utilizator
    const { name, email, status } = req.body;
    const newCustomer = {
      id: customers.length + 1,
      name,
      email,
      status,
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
  } else {
    // Metodă HTTP neacceptată
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
