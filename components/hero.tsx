"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Container } from "./container"

export function Hero() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#"
  return (
    <div className="bg-gradient-to-b from-white to-teal-50/30">
      <Container className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Image
            src="/images/dietician-headshot.jpg"
            alt="Dietician Nasreen Ara headshot"
            width={640}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl object-cover w-full h-auto shadow-soft"
            priority
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 text-brand-gold px-3 py-1 text-xs font-medium">
          🥇Gold Medalist • Sambalpur University
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-slate-900">
          🥇Gold Medalist Dietician with 10+ Years of Experience<br />Serving Clients Globally
          </h1>
          <p className="mt-4 text-slate-600">
            Ex-VLCC • Ex-HealthifyMe • Clients in USA, Dubai, Abu Dhabi, and UK. Science-based, empathetic, and sustainable nutrition coaching tailored to your lifestyle.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href={wa} target="_blank" rel="noopener noreferrer"><Button size="lg">Book a Free Consultation</Button></a>
            <a href="#lead-magnet"><Button size="lg" variant="outline">Get a Personalized Plan</Button></a>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
