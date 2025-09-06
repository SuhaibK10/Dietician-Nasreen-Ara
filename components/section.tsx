import { PropsWithChildren } from "react"
import { Container } from "./container"

export function Section({ children, className = "", id }: PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}
