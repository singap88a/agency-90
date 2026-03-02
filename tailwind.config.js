/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "var(--brand-dark)",
          primary: "var(--brand-primary)",
          secondary: "#ffffff",
          accent: "var(--brand-accent)",
          glow: "var(--brand-glow)",
        }
      },
      fontFamily: {
        heading: ["Noto Naskh Arabic", "Alexandria", "Outfit", "sans-serif"],
        body: ["Noto Naskh Arabic", "Plus Jakarta Sans", "sans-serif"],
        latin: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "parallax": "parallax 10s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: 0.5, filter: "blur(40px)" },
          "50%": { opacity: 0.8, filter: "blur(60px)" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      }
    },
  },
  plugins: [],
}