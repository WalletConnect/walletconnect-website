module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Roboto', 'system-ui'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/ui')],
}
