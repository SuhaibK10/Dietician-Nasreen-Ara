import { InputHTMLAttributes, forwardRef } from "react"
import clsx from "clsx"
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none ring-0 focus:border-brand-primary",
        className
      )}
      {...props}
    />
  )
)
Input.displayName = "Input"
