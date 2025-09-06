import { Container } from "./container"

export function TrustStrip() {
  return (
    <div className="border-y border-slate-100 bg-white">
      <Container className="py-4 text-center text-sm text-slate-600">
        <span className="font-medium text-slate-800">Ex-VLCC</span> &nbsp;|&nbsp; 
        <span className="font-medium text-slate-800">Ex-HealthifyMe</span> &nbsp;|&nbsp; 
        Clients in <span className="font-medium">USA</span>, <span className="font-medium">Dubai</span>, <span className="font-medium">Abu Dhabi</span>, <span className="font-medium">UK</span>
      </Container>
    </div>
  )
}
