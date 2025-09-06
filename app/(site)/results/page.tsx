import { Section } from "@/components/section"

export const metadata = { title: "Results" }

export default function ResultsPage() {
  const stats = [
    { label: "Total kg lost (clients)", value: "3,500+ kg" },
    { label: "Avg HbA1c improvement", value: "-1.2%" },
    { label: "Client satisfaction", value: "98%" }
  ]
  const beforeAfter = [
    { name: "Neha, IN", desc: "-9 kg in 12 weeks", before: "/images/workshop-teaching-2.jpg", after: "/images/client-counseling.jpg" },
    { name: "Omar, AE", desc: "HbA1c 8.1 → 6.5", before: "/images/client-counseling.jpg", after: "/images/workshop-teaching-1.jpg" }
  ]

  return (
    <Section>
      <h1 className="text-3xl font-semibold text-slate-900">Results</h1>
      <p className="text-slate-600 mt-2">Sustainable, measurable transformations.</p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        {stats.map(s => (
          <div key={s.label} className="card p-6 text-center">
            <div className="text-3xl font-semibold text-brand-primary">{s.value}</div>
            <div className="text-slate-600 mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {beforeAfter.map((b, i) => (
          <div key={i} className="card p-4">
            <div className="grid grid-cols-2 gap-4">
              <img src={b.before} alt={`Before — ${b.name}`} className="rounded-xl object-cover w-full aspect-[4/5]" />
              <img src={b.after} alt={`After — ${b.name}`} className="rounded-xl object-cover w-full aspect-[4/5]" />
            </div>
            <div className="mt-3 text-sm text-slate-700"><span className="font-medium">{b.name}</span> — {b.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
