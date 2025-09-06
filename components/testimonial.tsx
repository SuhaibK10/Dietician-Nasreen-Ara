import { Card } from "./ui/card"

export function Testimonial({
  quote, name, countryCode
}: { quote: string; name: string; countryCode: "IN"|"US"|"AE"|"GB" }) {
  const flags: Record<string,string> = { IN: "🇮🇳", US: "🇺🇸", AE: "🇦🇪", GB: "🇬🇧" }
  return (
    <Card>
      <p className="text-slate-700 italic">“{quote}”</p>
      <div className="mt-4 text-sm text-slate-600">— <span className="font-medium text-slate-900">{name}</span> {flags[countryCode]}</div>
    </Card>
  )
}
