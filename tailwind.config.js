/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "5px 5px 17px #c8c8c8, -5px -5px 17px #ffffff",
      },
    },
  },
  plugins: [],
};
