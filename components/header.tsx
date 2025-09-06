"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/credentials", label: "Credentials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
]

export function Header() {
  const [open, setOpen] = useState(false)
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#"
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-slate-900 text-lg">
          <span className="text-brand-gold">● </span>Nasreen Ara
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-slate-900">
              {n.label}
            </Link>
          ))}
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <Button size="sm">Free Consultation</Button>
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {nav.map(n => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-slate-700">
                {n.label}
              </Link>
            ))}
            <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <Button className="w-full">Free Consultation</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
