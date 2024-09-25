// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const initialCustomers = [
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

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.get("/api/customers", (req, res) => {
    res.json(initialCustomers);
  });

  server.post("/api/customers", (req, res) => {
    const { name, email, status } = req.body;
    const newCustomer = {
      id: initialCustomers.length + 1,
      name,
      email,
      status,
    };
    initialCustomers.push(newCustomer);
    res.status(201).json(newCustomer);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
