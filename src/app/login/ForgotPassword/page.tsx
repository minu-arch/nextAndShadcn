"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Starea pentru erori
  const [success, setSuccess] = useState(""); // Starea pentru mesajul de succes

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/changePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword, confirmPassword }),
    });

    if (response.ok) {
      const data = await response.json();
      setSuccess(data.message); // Afișează mesajul de succes
      setError(""); // Resetează mesajul de eroare
    } else {
      const errorData = await response.json();
      setError(errorData.error); // Setează mesajul de eroare
      setSuccess(""); // Resetează mesajul de succes
    }
  };

  return (
    <div className="grid h-[100vh] w-[100vw] content-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>Enter your New Password below.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {error && <div className="text-red-500">{error}</div>}{" "}
          {/* Afișează mesajul de eroare */}
          {success && <div className="text-green-500">{success}</div>}{" "}
          {/* Afișează mesajul de succes */}
          <form onSubmit={handleSubmit}>
            <div className="mb-2 grid gap-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualizează starea email
              />
            </div>
            <div className="mb-2 grid gap-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} // Actualizează starea parolei
              />
            </div>
            <div className="mb-2 grid gap-2">
              <Label htmlFor="confpassword">Confirm Password</Label>
              <Input
                id="confpassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Actualizează starea confirmării parolei
              />
            </div>
            <CardFooter>
              <Button className="w-full" type="submit">
                Change Password
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
