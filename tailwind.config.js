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
          dark: "#0f172a",      // Slate 900 for text
          primary: "#059669",   // Emerald 600 for primary
          secondary: "#ffffff", // Pure white for background
          accent: "#f5b002",    // Golden Amber accent
          glow: "#34d399",      // Emerald 400 for glows
        }
      },
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        body: ["Inter", "sans-serif"],
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