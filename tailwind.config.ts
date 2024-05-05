import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "border-width": {
          "from": {
            "width": "10%",
            "opacity": "0"
          },
          "to": {
            "width": "100%",
            "opacity": "1"
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
        "flicker2": {
          "0%": {

            opacity: "1"
          }, "10%": {

            opacity: "0"
          },
          "20%": {

            opacity: "1"
          },
          "30%": {

            opacity: "0"
          },
          "60%": {

            opacity: "0"
          }, 
          "70%": {

            opacity: "1"
          },
          "80%": {

            opacity: "0"
          },
          "100%": {

            opacity: "1"
          },
        },
        "flicker": {
          "0%": {

            opacity: "1"
          }, "10%": {

            opacity: "0"
          },
          "20%": {

            opacity: "1"
          },
          "30%": {

            opacity: "0"
          },
          
          "40%": {

            opacity: "1"
          },
          "66%": {

            opacity: "0"
          }, "100%": {

            opacity: "1"
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slideDown": 'slideDown 1s ease-in-out forwards',
        "flicker-1": "flicker2 2s ",
        "flicker-3": "flicker 2.5s ",
        "border-width": "border-width 3s forwards  "

      },
      fontFamily: {
        cal: ["Cal", 'sans-serif']
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config