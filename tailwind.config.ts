import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        mobile: "490px",
        tablet: "1040px",
        desktop: "1620px",
      },
      fontFamily: { 
        primary: ["Poppins"],
        text: ["Raleway"],
        Roboto: ['Roboto'],
       },
      colors: {
        white: "#ffffff",
        black: "#000000",
        green: "#5EDC11",
        yellow: "#FFCE22",
        orange: "#FF7222",
        pink: "#FF22E9",
        blue: "#2260FF",
        purple: {
          DEFAULT: "#5700FF",
          100: "#FCFAFF",
          200: "#F5F0FF",
          300: "#EEE5FF",
          400: "#DECFFC",
          500: "#BC99FF",
          600: "#9A66FF",
          700: "#7833FF",
        },
        peach: {
          DEFAULT: "#E1DBD1",
          100: "#FDFDFC",
          200: "#FBFAF9",
          300: "#F9F8F6",
          400: "#F7F6F3",
          500: "#F5F3F0",
          600: "#EEEBE5",
          700: "#EBE7E0",
        },
        grey: {
          DEFAULT: "#1A1A1A",
          100: "#CCCCCC",
          200: "#B3B3B3",
          300: "#999999",
          400: "#808080",
          500: "#666666",
          600: "#4D4D4D",
          700: "#333333",
        },
      },
      backgroundImage: {
        "bg-imagen": "url('/images/bg.jpeg')",

      },
    },
  },
  plugins: [nextui()],
};
export default config;
