import { Button } from "./ui/button"

export function CtaBar() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#"
  return (
    <div className="rounded-2xl bg-brand-primary text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="text-2xl font-semibold">Ready to transform your health?</h3>
        <p className="opacity-90">Book a free consultation and get a personalized, sustainable plan.</p>
      </div>
      <div className="flex gap-3">
        <a href={wa} target="_blank" rel="noopener noreferrer"><Button variant="outline">WhatsApp</Button></a>
        <a href="/contact"><Button>Contact Form</Button></a>
      </div>
    </div>
  )
}
