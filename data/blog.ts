export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: "pcos-nutrition-myths",
    title: "PCOS Nutrition Myths You Can Stop Believing",
    excerpt: "Carbs aren’t the enemy. Here’s what actually helps with PCOS.",
    date: "2025-08-20",
    tags: ["PCOS", "Women’s Health"],
    content: `
### What really helps
- Protein at each meal
- Fiber (25–35g/day)
- Consistent meal timing
- Sustainable activity
    `
  },
  {
    slug: "indian-meals-for-fat-loss",
    title: "Indian Meals for Fat Loss (Without Giving Up Taste)",
    excerpt: "Fat loss is possible with rotis, rice, and dal — the trick is balance.",
    date: "2025-08-22",
    tags: ["Fat Loss", "Indian Diet"],
    content: `
### Plates that work
- 1/2 veggies, 1/4 protein, 1/4 carbs
- Use ghee mindfully
- Hydration & sleep
    `
  },
  {
    slug: "sustainable-vs-crash-diets",
    title: "Sustainable Weight Loss vs Crash Diets",
    excerpt: "Crash diets backfire. Here’s the sustainable route.",
    date: "2025-08-25",
    tags: ["Weight Loss"],
    content: `
### Why sustainable wins
- Preserves metabolism
- Reduces rebound
- Fits your life
    `
  },
  {
    slug: "nutrition-for-busy-professionals",
    title: "Nutrition for Busy Professionals",
    excerpt: "Smart preps for long workdays and travel.",
    date: "2025-08-28",
    tags: ["Lifestyle", "Meal Prep"],
    content: `
### Quick wins
- 10-minute breakfasts
- Protein snacks
- Airport hacks
    `
  }
]
