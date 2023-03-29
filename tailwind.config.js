/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  ],
  
  theme: {

    extend: {},

    screens: {

      'xxs': '320px',

      'xs': '420px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },

  daisyui: {
    themes: [
      {
            mytheme: {
                          


                  "primary": "#570DF8",
 

                  "secondary": "#F000B8",
             


                  "accent": "#37CDBE",
                          


                  "neutral": "#3D4451",
                          


                  "base-100": "#e5e7eb",
                          


                  "info": "#3ABFF8",
                          


                  "success": "#36D399",
                          


                  "warning": "#FBBD23",
                          


                  "error": "#F87272",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")],
}