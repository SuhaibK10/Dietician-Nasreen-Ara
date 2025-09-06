import { Card } from "./ui/card"

export function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 mt-2">{desc}</p>
    </Card>
  )
}
