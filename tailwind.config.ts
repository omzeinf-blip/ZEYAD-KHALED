import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0E1117",
          secondary: "#131923",
        },
        card: "#171E29",
        glass: "rgba(255,255,255,0.05)",
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
        },
        accent: {
          primary: "#6C8CFF",
          secondary: "#7EE7FF",
          purple: "#8D83FF",
        },
        state: {
          success: "#82F7C5",
          warning: "#FFD166",
        },
        text: {
          primary: "#F7F8FB",
          secondary: "#AAB4C4",
          muted: "#8A95A5",
        },
      },
      fontFamily: {
        heading: ["var(--font-clash)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      spacing: {
        "section-desktop": "160px",
        "section-tablet": "90px",
        "section-mobile": "60px",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(60% 60% at 20% 20%, rgba(108,140,255,0.18) 0%, rgba(108,140,255,0) 60%), radial-gradient(50% 50% at 80% 30%, rgba(126,231,255,0.14) 0%, rgba(126,231,255,0) 60%), radial-gradient(60% 60% at 50% 90%, rgba(141,131,255,0.16) 0%, rgba(141,131,255,0) 60%)",
      },
      keyframes: {
        auroraMove: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.05)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        aurora: "auroraMove 22s ease-in-out infinite",
        float: "floatSlow 6s ease-in-out infinite",
        glow: "glowPulse 3.5s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
