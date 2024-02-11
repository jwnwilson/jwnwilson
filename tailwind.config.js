const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: "#064e3b"
        },
        slate: {
          500: "#64748b"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
})

