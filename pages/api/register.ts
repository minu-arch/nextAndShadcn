import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, password } = req.body;

    // Validare a datelor
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pentru validarea e-mailului
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    try {
      // Verifică dacă e-mailul există deja în baza de date
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      // Criptează parola
      const hashedPassword = await bcrypt.hash(password, 10);

      // Creează utilizatorul
      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
