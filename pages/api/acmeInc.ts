import { NextApiRequest, NextApiResponse } from "next";

// Exemplu de date
const data = [
  { id: 1, name: "Product 1", description: "Description for product 1" },
  { id: 2, name: "Product 2", description: "Description for product 2" },
  // Adaugă mai multe date după cum este necesar
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Returnează datele în format JSON
    res.status(200).json(data);
  } else {
    // Metodă HTTP neacceptată
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
