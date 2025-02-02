// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">EventOrg</h1>
      <div>
        <Link href="/" className="mx-2">Home</Link>
        <Link href="/forms" className="mx-2">Register</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
      </div>
    </nav>
  );
}
