"use client"
import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function LeadMagnet() {
  const [email, setEmail] = useState("")
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thanks! The 7-Day Meal Plan download will start (placeholder).")
  }
  return (
    <Card>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Free 7-Day Meal Plan</h3>
          <p className="text-slate-600 mt-2">Kickstart your journey with a dietitian-approved Indian meal plan you can follow today.</p>
        </div>
        <form onSubmit={onSubmit} className="flex gap-3">
          <Input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            aria-label="Email"
          />
          <Button type="submit">Download</Button>
        </form>
      </div>
    </Card>
  )
}
