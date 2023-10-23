/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-button":'#ff561e'
      }
    },
    boxShadow: {
      // navbar: '0px 5px 10px 0px rgb(120, 120, 120, 0.1), 0 2px 3px -1px rgba(3, 3, 4, 0.05)',
      navbar: '0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px   -1px rgba(3, 3, 4, 0.03)',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

