import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#07070d", accent: "#8b5cf6", cyan2: "#22d3ee" },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(40px) rotateX(-40deg)", filter: "blur(8px)" }, "100%": { opacity: "1", transform: "none", filter: "blur(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        blink: { "50%": { opacity: "0" } },
        shift: { "0%,100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        spinSlow: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        rise: "rise .8s cubic-bezier(.2,.7,.2,1) both",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        shift: "shift 6s ease infinite",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
