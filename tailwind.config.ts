import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}", "./lib/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: { base: { bg: "#0b0b0f", fg: "#eaeaf2", dim: "#9aa0ab" } },
      fontFamily: { display: ["Inter", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
};
export default config;
