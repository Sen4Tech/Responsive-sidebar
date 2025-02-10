module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dark': 'var(--dark)',
          'dark-alt': 'var(--dark-alt)',
          'light': 'var(--light)',
          'primary': 'var(--primary)',
          'grey': 'var(--grey)'
        },
        width: {
          'sidebar': 'var(--sidebar-width)'
        }
      },
    },
    plugins: [],
  }