/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sen: ["Sen"],
      },
      colors: {
        primaryColor: "#1D3E53",
        secondaryColor: "#77ABB7",
        lightColor: "#9fc4cc",
        hoverButtonColor: "#92bbc5",
        formColor: "#254B62",
      },
    },
  },
  plugins: [],
};
