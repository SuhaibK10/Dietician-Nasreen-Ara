import Link from "next/link"
import { Container } from "./container"

export function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com"
  return (
    <footer className="mt-20 border-t border-slate-100">
      <Container className="py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-slate-900">Nasreen Ara</div>
            <p className="text-sm text-slate-600 mt-2">
              Gold Medalist Dietician • Sambalpur University. 10+ years of science-based, empathetic nutrition care.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Links</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/credentials">Credentials</Link></li>
              <li><Link href="/results">Results</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Legal</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="/legal/disclaimer">Medical Disclaimer</Link></li>
              <li><Link href="/legal/privacy">Privacy Policy</Link></li>
              <li><Link href="/legal/terms">Terms & Conditions</Link></li>
            </ul>
            <p className="text-sm text-slate-600 mt-4">Email: <a href={`mailto:${email}`}>{email}</a></p>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-8">© {new Date().getFullYear()} Nasreen Ara. All rights reserved.</p>
      </Container>
    </footer>
  )
}
