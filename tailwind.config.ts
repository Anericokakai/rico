import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // borders
        customSlate: "#d6ebfd30",
        
        // text colors
        "grayText-1a": "#f1f7feb5",
        "grayText-1b": "#fcfdffef",
        "greenText-1a": "#22ff991e",
        "greenText-1b": "#46fea5d4",
        "lightOrange-1a": "#ffc446",
        "darkOrange-1a": "##fe6d15f7",
        "greenText-1c": "#44ffa49e",
        "greenText-2c": "#43fea4ab",
        "greenText-3c": "#46fea5d4",
        "amber-1a": "#ffc53d",
        "amber-1b": "#ffd60a",
        "amber-1c": "#ffca16",
        // background
        "grayBg-1a": "#d3edf81d",
        "grayBg-1b": "#d6ebfd30",
        "back-bg": "#05050a",
        "greenBg-1a": "#22ff991e",
        "primary-gray-2": "#71717a",
        "primary-gray-1": "#a1a1aa",

        // code highlighters
        keyword: "#6c6c6c",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    screens: {
      xss: "300px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
export default config;
