import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#199A8E",
          dark: "#147C73",
          gold: "#C9A227"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.12)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
export default config;
