/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // lora: ["Lora", "sans-serif"],
    },
    extend: {
      colors: {
        "main-color": "#741906",
        "heading-color": "#ebebeb",
        "logo-bg": "#ededed",
        "cart-count-color": "#f8d7a4",
        "counter-text-color": "#223f5c",
        "about-us-text-color": "#232730",
        "services-text-color": "#12273d",
      },
    },
  },
  plugins: [],
};
