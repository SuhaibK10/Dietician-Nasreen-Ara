import Image from "next/image"
import { Section } from "@/components/section"

export const metadata = { title: "About" }

export default function AboutPage() {
  return (
    <>
      <div className="relative h-64 md:h-80 w-full">
        <Image src="/images/gold-medal-ceremony.jpg" alt="Gold medal ceremony" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-6 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">About Nasreen Ara</h1>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900">Gold Medalist • 10+ Years • Global Clients</h2>
            <p className="text-slate-700 mt-4">
              I’m a <strong>🥇Gold Medalist in Dietetics from Sambalpur University</strong> with over a decade of experience. I’ve served as a dietician with <strong>VLCC</strong> and <strong>HealthifyMe</strong>, helping thousands improve weight, hormones, and metabolic markers. Today I work with clients across <strong>India, UAE, UK, and USA</strong>, creating sustainable plans grounded in science and empathy.
            </p>
            <p className="text-slate-700 mt-4">
              My approach is simple: <strong>no crash diets, no guilt</strong>—just practical, tasty food that fits your life, with structured follow-ups so your results last.
            </p>
          </div>
          <div className="space-y-4">
            <Image src="/images/dietician-headshot.jpg" alt="Nasreen Ara" width={800} height={1000} className="rounded-2xl shadow-soft object-cover w-full h-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Image src="/images/workshop-teaching-1.jpg" alt="Teaching workshop" width={1200} height={800} className="rounded-2xl shadow-soft object-cover w-full h-auto" />
          <Image src="/images/workshop-teaching-2.jpg" alt="Nutrition workshop" width={1200} height={800} className="rounded-2xl shadow-soft object-cover w-full h-auto" />
          <Image src="/images/client-counseling.jpg" alt="Client counseling" width={1200} height={800} className="rounded-2xl shadow-soft object-cover w-full h-auto" />
        </div>

        <p className="text-slate-600 mt-6 italic">“Guiding patients with science-based nutrition.”</p>
      </Section>
    </>
  )
}
