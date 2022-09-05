/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      sm: "0.25rem",
      md: "1rem",
      lg: "3.5rem",
      full: "9999px;",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
