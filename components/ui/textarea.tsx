import { forwardRef, TextareaHTMLAttributes } from "react"
import clsx from "clsx"

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:border-brand-primary min-h-[120px]",
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = "Textarea"
