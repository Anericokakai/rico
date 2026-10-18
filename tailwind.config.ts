import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Note: With Tailwind CSS v4, theme configuration is done in CSS using @theme
  // This config file is mainly for tooling compatibility (like shadcn/ui)
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
