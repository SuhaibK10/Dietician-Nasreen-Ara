import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Section } from "@/components/section"
import { ServiceCard } from "@/components/service-card"
import { Testimonial } from "@/components/testimonial"
import { LeadMagnet } from "@/components/lead-magnet"
import { CtaBar } from "@/components/cta-bar"
import Image from "next/image"
import { services } from "@/data/services"
import { testimonials } from "@/data/testimonials"
import { professionalServiceJsonLd, faqJsonLd } from "@/lib/schema"

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
      <Hero />
      <TrustStrip />

      <Section id="services">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Services</h2>
        <p className="text-slate-600 mt-2">Personalized nutrition for real life.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => <ServiceCard key={s.title} title={s.title} desc={s.desc} />)}
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => <Testimonial key={i} {...t} />)}
        </div>
      </Section>

      <Section id="lead-magnet">
        <LeadMagnet />
      </Section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-slate-900">Corporate Wellness</h3>
            <p className="text-slate-600 mt-2">Workshops, health talks, and on-site clinics to elevate team wellbeing and productivity.</p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/workshop-teaching-1.jpg"
              alt="Corporate wellness workshop"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-soft object-cover w-full h-auto"
            />
          </div>
        </div>
      </Section>

      <Section><CtaBar /></Section>
    </>
  )
}
