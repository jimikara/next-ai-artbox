import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% calc(100% - 2px),#000 90deg, #0000 0)",
      },
      keyframes: {
        l16: {
          "50%": {
            backgroundPosition: "0 -9.6px ,8px 9.6px",
            transform: "rotate(90deg)",
          },
          "100%": {
            backgroundPosition: "0 -19.2px,8px 19.2px",
            transform: "rotate(180deg)",
          },
        },
        slideUpFadeIn: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUpFadeIn: 'slideUpFadeIn 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      transitionProperty: {
        'fill': 'fill',
      },
      colors: {
        "palette-pink": {
          50: "#FDF9F9",
          100: "#F9E6E8",
          200: "#F3C2C9",
          300: "#ED9EA9",
          400: "#E55A6A",
          500: '#E78BB2',
          600: "#D63E4B",
          700: "#B52F3A",
          800: "#932029",
          900: "#79171E",
        },
        "palette-brown": {
          50: "#FDFCF9",
          100: "#FBF8E9",
          200: "#F6E7C4",
          300: "#F1D59F",
          400: "#E9B656",
          500: "#87441F",
          600: "#C68E2D",
          700: "#A36E24",
          800: "#82511B",
          900: "#6C4015",
        },
        "palette-yellow": {
          50: "#FFFEF5",
          100: "#FEFCD1",
          200: "#FDF9A8",
          300: "#FCF67E",
          400: "#FAF22A",
          500: '#FBE69B',
          600: "#E2D01E",
          700: "#BAA41A",
          800: "#927818",
          900: "#746116",
        },
        "palette-blue": {
          50: "#F6F7FF",
          100: "#EDEFFF",
          200: "#D3D7FF",
          300: "#B9BEFF",
          400: "#868FFF",
          500: "#8D8BE7",
          600: "#6B6FD3",
          700: "#4A53B0",
          800: "#383F8E",
          900: "#2F3473",
        },
        "palette-error": {
          50: "#FDF6F6",
          100: "#FBEAEA",
          200: "#F6C9C9",
          300: "#F0A8A8",
          400: "#E96666",
          500: "#E12828",
          600: "#C12525",
          700: "#A02121",
          800: "#801C1C",
          900: "#681818",
        }
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)'],
      },
    },
    variants: {
      extend: {
        fill: ['hover'],
      },
    },
  },
  plugins: [],
};
export default config;
