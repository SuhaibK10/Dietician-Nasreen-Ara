import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://nasreen-ara.vercel.app"),
  title: {
    default: "Nasreen Ara — Gold Medalist Dietician",
    template: "%s | Nasreen Ara"
  },
  description:
    "Gold Medalist in Dietetics from Sambalpur University. 10+ years experience. Ex-VLCC & Ex-HealthifyMe. Serving clients in USA, Dubai, Abu Dhabi, and the UK.",
  openGraph: {
    title: "Nasreen Ara — Gold Medalist Dietician",
    description:
      "Science-based, empathetic nutrition coaching. Global clients. Book a free consultation.",
    url: "https://nasreen-ara.vercel.app",
    siteName: "Nasreen Ara",
    images: [{ url: "/images/dietician-headshot.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasreen Ara — Gold Medalist Dietician",
    description:
      "Science-based, empathetic nutrition coaching. Global clients. Book a free consultation.",
    images: ["/images/dietician-headshot.jpg"]
  },
  icons: { icon: "/favicon.ico" }
}

export const viewport: Viewport = { themeColor: "#199A8E" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
