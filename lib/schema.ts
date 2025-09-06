export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nasreen Ara",
    "description": "Gold Medalist Dietician with 10+ years of experience. Ex-VLCC & Ex-HealthifyMe.",
    "areaServed": ["IN", "AE", "GB", "US"],
    "image": "https://nasreen-ara.vercel.app/images/dietician-headshot.jpg",
    "url": "https://nasreen-ara.vercel.app",
    "sameAs": [],
    "provider": "Nasreen Ara",
    "address": { "@type": "PostalAddress", "addressCountry": "IN" },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "10:00", "closes": "19:00" }
    ]
  }
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do I need to give up carbs?", "acceptedAnswer": { "@type": "Answer", "text": "No. We focus on balance, portioning, and timing to fit your lifestyle." } },
      { "@type": "Question", "name": "Do you work with PCOS and Diabetes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with structured, evidence-based protocols and regular follow-ups." } }
    ]
  }
}

export function blogPostingJsonLd({ title, slug, date, excerpt }: { title: string; slug: string; date: string; excerpt: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "datePublished": date,
    "image": "https://nasreen-ara.vercel.app/images/dietician-headshot.jpg",
    "author": { "@type": "Person", "name": "Nasreen Ara" },
    "publisher": { "@type": "Organization", "name": "Nasreen Ara" },
    "description": excerpt,
    "mainEntityOfPage": `https://nasreen-ara.vercel.app/blog/${slug}`
  }
}
