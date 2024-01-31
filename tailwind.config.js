/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "black white"
        },
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar" : {
            width : "1px"
          },
          "&::-webkit-scrollbar-track" : {
            background : "white",
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor : "black",
            borderRadius : "20px",
          }
        }
      }
      addUtilities(newUtilities, ["responsive" , "hover"])
    }
  ],
}