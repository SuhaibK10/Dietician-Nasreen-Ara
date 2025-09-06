import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}

export function Button({ className, variant = "primary", size = "md", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition shadow-soft disabled:opacity-60 disabled:cursor-not-allowed"
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-dark",
    ghost: "bg-transparent text-brand-primary hover:bg-brand-primary/10",
    outline: "border border-brand-primary text-brand-primary hover:bg-brand-primary/10"
  }
  const sizes = { sm: "px-3 py-2 text-sm", md: "px-4 py-2.5", lg: "px-5 py-3 text-lg" }
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />
}
