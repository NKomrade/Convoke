import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...colors, // Extend with default Tailwind colors
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans], // Using Poppins
      },
      keyframes: {
        "curtain-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        "curtain-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }
        }
      },
      animation: {
        "curtain-down": "curtain-down 1s ease-in-out",
        "curtain-up": "curtain-up 1s ease-in-out"
      }
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }: { addBase: (styles: Record<string, Record<string, string>>) => void; theme: (key: string) => any }) {
      let allColors = flattenColorPalette(theme("colors"));

      let newVars: Record<string, string> = Object.fromEntries(
        Object.entries(allColors)
          .filter(([_, val]) => typeof val === "string") // Ensure only strings
          .map(([key, val]) => [`--${key}`, val as string]) // Type assertion
      );

      addBase({
        ":root": { ...newVars }, // ✅ Wrap inside an object
      });
    },
  ],
};

export default config;
