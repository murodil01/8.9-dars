"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 shrink-0 border-r bg-muted/40 px-6 py-8 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="space-y-8 text-sm">

        <div className="space-y-4">
          <h3 className="text-muted-foreground font-semibold uppercase text-xs tracking-widest">Get Started</h3>
          <nav className="space-y-2">
            <SidebarLink href="/" label="Introduction" />
            <SidebarLink href="/" label="Installation" />
            <SidebarLink href="/" label="components.json" />
            <SidebarLink href="/" label="Theming" />
            <SidebarLink href="/" label="Dark Mode" />
            <SidebarLink href="/" label="CLI" />
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-muted-foreground font-semibold uppercase text-xs tracking-widest">Components</h3>
          <nav className="space-y-2">
            <SidebarLink href="/" label="Accordion" />
            <SidebarLink href="/" label="Alert" />
            <SidebarLink href="/" label="Button" />
          </nav>
        </div>
      </div>
    </aside>
  )
}

function SidebarLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-muted hover:text-accent-foreground transition-colors"
    >
      {label}
    </Link>
  )
}
