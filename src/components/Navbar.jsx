"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const categories = [
  { name: "Stock", href: "/stock" },
  { name: "Mutual Fund", href: "/mutual-fund" },
  { name: "IPO", href: "/ipo" },
  { name: "Careers", href: "/careers" },
  { name: "Finance", href: "/finance" },
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70
     dark:bg-black/70 backdrop-blur-md shadow-sm transition-shadow border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="text-sm font-medium hover:underline"
              >
                {cat.name}
              </Link>
            ))}
            <Button>Join</Button>
          </nav>
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <Button className="w-full mt-2">Join</Button>
        </div>
      )}
    </header>
  );
}
