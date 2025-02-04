import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily:{
        yekanThin: 'yekan-thin',
        yekanLight: 'yekan-light',
        yekanRegular: 'yekan-regular',
        yekanSemiBold: 'yekan-semi-bold',
        yekanBold: 'yekan-bold',
        yekanExtraBold: 'yekan-extra-bold',
        yekanBlack: 'yekan-black',
        yekanExtraBlack: 'yekan-extra-black'

      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#284f49",

          "secondary": "#e68314",

          "accent": "#eea85b",

          "neutral": "#f8f7ef",

          "base-100": "#ffffff",

          "info": "#3c86d7",

          "success": "#048d65",

          "warning": "#e4a117",

          "error": "#ea3f3e",
        },
      },
    ],
  },
} satisfies Config;
