module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {

      'xs': '300px',
      'smm': '540px',

      'sm': '710px',
      // => @media (min-width: 640px) { ... }

      'md' : '1020px',

      // => @media (min-width: 1024px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl' : '1536px',
    },
    extend: {

      backgroundImage: (theme)=>({

        'main-header': "url(/header-bg.svg)",
        'main-header2': "url(/header-bg2.svg)",

      }),

      fontFamily: {
        'sans': [ 'Helvetica', 'Arial', 'sans-serif'],
        'ivymade': ['IvyMode',],
        'poppins' : ['Poppins'],
        'verdanab' : ['Verdana'],
      },

      colors:
      {
          fonts: '#F7F7F7',
          back:"#08001A",
          pfont: "#6B7280",
          cardfont : "#2F2D2D;",
          currencyback: "#F8F5FF",
          currencyhover: "#FFFFFF",

          new: "#515151",

          mainback :  "#E5E5E5",

          button : "#8F60FF",

          
      }
    },
  },
  plugins: [],
}