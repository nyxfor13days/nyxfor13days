import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "0.75rem",
          medium: "1rem",
          large: "1.25rem",
        },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
