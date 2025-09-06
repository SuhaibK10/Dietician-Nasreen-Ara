import Image from "next/image"
import { Section } from "@/components/section"
import { services } from "@/data/services"
import { ServiceCard } from "@/components/service-card"
import { CtaBar } from "@/components/cta-bar"

export const metadata = { title: "Services" }

const details: Record<string, { forWho: string; includes: string[]; outcomes: string[] }> = {
  "Weight Loss": {
    forWho: "Adults seeking fat loss without crash dieting.",
    includes: ["Personalized plan", "Meal plate templates", "Weekly check-ins"],
    outcomes: ["2–4 kg/month (typical)", "Higher energy", "Sustainable habits"]
  },
  "PCOS/PCOD": {
    forWho: "Women with PCOS/PCOD symptoms.",
    includes: ["Hormone-supportive meals", "Protein & fiber targets", "Cycle tracking"],
    outcomes: ["Reduced cravings", "Regularized cycles", "Better mood"]
  },
  "Diabetes": {
    forWho: "Type 2 diabetes or prediabetes.",
    includes: ["Glycemic-aware meals", "Snack swaps", "Follow-up labs review"],
    outcomes: ["Improved HbA1c", "Stable energy", "Lower cravings"]
  },
  "Thyroid": {
    forWho: "Hypothyroid / Hashimoto’s clients.",
    includes: ["Nutrient timing", "Micronutrient focus", "Lifestyle anchors"],
    outcomes: ["Improved metabolism", "Less fatigue", "Better digestion"]
  },
  "Gut Health": {
    forWho: "Bloating, constipation, IBS.",
    includes: ["Fiber targets", "Probiotic foods", "Trigger mapping"],
    outcomes: ["Reduced bloating", "Regularity", "Comfortable meals"]
  },
  "Sports Nutrition": {
    forWho: "Amateur to semi-pro athletes.",
    includes: ["Performance plate", "Pre/Post workout fuel", "Hydration plan"],
    outcomes: ["Better performance", "Faster recovery", "Body comp changes"]
  },
  "Prenatal/Postnatal": {
    forWho: "Expecting and new mothers.",
    includes: ["Trimester-wise needs", "Lactation support", "Micros coverage"],
    outcomes: ["Healthy weight gain", "Energy & milk supply", "Balanced nutrition"]
  },
  "Corporate Wellness": {
    forWho: "Companies investing in team health.",
    includes: ["Workshops & Q&A", "On-site clinic", "Custom resources"],
    outcomes: ["Higher productivity", "Lower sick days", "Happier teams"]
  }
}

export default function ServicesPage() {
  return (
    <>
      <Section>
        <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
        <p className="text-slate-600 mt-2">Who it’s for, what’s included, expected outcomes.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => <ServiceCard key={s.title} title={s.title} desc={s.desc} />)}
        </div>

        <div className="mt-12 space-y-10">
          {services.map(s => (
            <div key={s.title} className="card p-6">
              <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
              <p className="text-slate-600 mt-2">{s.desc}</p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h3 className="font-medium text-slate-900">Who it’s for</h3>
                  <p className="text-slate-600 mt-2">{details[s.title].forWho}</p>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">What’s included</h3>
                  <ul className="list-disc list-inside text-slate-600 mt-2">
                    {details[s.title].includes.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Outcomes</h3>
                  <ul className="list-disc list-inside text-slate-600 mt-2">
                    {details[s.title].outcomes.map(o => <li key={o}>{o}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src="/images/workshop-teaching-1.jpg" alt="Corporate wellness session" width={1200} height={800} className="rounded-2xl shadow-soft object-cover w-full h-auto" />
            </div>
            <div><CtaBar /></div>
          </div>
        </div>
      </Section>
    </>
  )
}
