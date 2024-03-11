import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      fontSize: {
        custom10rem: "10rem",
      },

      colors: {},
      cursor: {
        orangeLinkHand: "url('/aero-link-perfect-2021.cur'), auto",
        zoomIn: "url('/Zoom In.cur'), auto",
        zoomOut: "url('/Zoom Out.cur'), auto",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
