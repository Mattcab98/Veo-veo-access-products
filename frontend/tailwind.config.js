/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ajusta según tu estructura
  ],
  darkMode: "class", // activar modo oscuro
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "background-light": "var(--color-background-light)",
        "background-dark": "var(--color-background-dark)",
        "accent-blue": "var(--color-accent-blue)",
        "accent-yellow": "var(--color-accent-yellow)",
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      boxShadow: {
        card: "0 20px 60px -15px rgba(242,13,242,0.15)",
        button: "0 4px 14px 0 rgba(242,13,242,0.39)",
        "button-hover": "0 6px 20px rgba(242,13,242,0.23)",
      },
      backgroundImage: {
        "bubble-pattern": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
