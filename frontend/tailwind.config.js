module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.05em',
      wider: '.1em',
      widest: '.2em',
    },
    extend: {
      colors: {
        main: {
          b1: '#35C1FF',
          b2: '#6BCEFF',
          b3: '#94DBFF',
          b4: '#E8FEFF',
          bg: '#F9FDFF',
          DEFAULT: '#F5F5F5',
        },
        fb: {
          DEFAULT: '#343838',
        },
        ora: {
          DEFAULT: '#ED7039',
        },
      },
    },
  },
  plugins: [],
}
