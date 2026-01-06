import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Yo thapnu safer hunchha
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1e49af",
        "biraj-red": {
          light: "#ffcccc",
          DEFAULT: "#ff0000",
          dark: "#990000",
        },
      },
    },
  },
  plugins: [],
};

export default config;
