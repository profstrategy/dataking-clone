/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        text_white: '#fff',
        text_gray: '#707070',
        primary: '#ffffff',

      },

      screens: {
        "xs": "450px",
        "iphonesm" : "320px",
        "iphonemd" : "375px",
        "iphonelg" : "414px" ,
        // 'tablet': {'min': '1090px', 'max': '1220px'}
      },

      boxShadow: {
        card: "0 4px 20px rgb(218 225 232 / 85%)"
      },

      fontFamily: {
        'body': ['"Open Sans", sans-serif'],
        'h2' : ['"Work Sans", sans-serif']
      }
    },
  },
  plugins: [],
}

