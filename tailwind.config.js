module.exports = {
  purge: [],
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
