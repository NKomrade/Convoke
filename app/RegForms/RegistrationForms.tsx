"use client"; 
import { useState } from "react";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registered: ${name} (${email})`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <label className="block">
        Name:
        <input className="border p-2 w-full text-black" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="block mt-2">
        Email:
        <input className="border p-2 w-full text-black" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Register</button>
    </form>
  );
}
