/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "custom-fafafa": "#fafafa" },
      colors: { "custom-c5cae9": "#e8eaf6" },
      boxShadow: {
        "custom-shadow": "5px 5px 17px #c8c8c8, -5px -5px 17px #ffffff",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-40px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: { "slide-down": "slide-down 0.1s ease-out forwards" },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #ff7e5f, #feb47b)",
      },
    },
  },
  plugins: [],
};
