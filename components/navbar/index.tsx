"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle"
import { ListFilter } from "lucide-react"

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 border-b bg-background text-foreground">
      <div className="mx-auto flex h-16 items-center justify-between px-6">

        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-lg"><ListFilter /></Link>
          <nav className="hidden md:flex gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Docs</Link>
            <Link href="/components" className="hover:text-foreground transition-colors">Components</Link>
            <Link href="/blocks" className="hover:text-foreground transition-colors">Blocks</Link>
            <Link href="/charts" className="hover:text-foreground transition-colors">Charts</Link>
            <Link href="/themes" className="hover:text-foreground transition-colors">Themes</Link>
            <Link href="/colors" className="hover:text-foreground transition-colors">Colors</Link>
          </nav>
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
