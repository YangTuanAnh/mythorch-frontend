/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e8f0f2",
        secondary: "#0075ff",
        tertiary: "#ccebf7",
        s2condNOSTATUSBG: '#C9C9C9',
        s2condREVIEWINGBG: '#A5DAE5',
        s2condINPROGRESSBG: '#E5D9A5',
        s2condCOMPLETEDBG: '#A5E5BF',
        s2condNOSTATUS: '#EEEEEE',
        s2condREVIEWING: '#9DEBFD',
        s2condINPROGRESS: '#FDEA9D',
        s2condCOMPLETED: '#9DFDC3',
        thirdLOGIN: '#E6F2F7',
        thirdWELCOME: '#66C4E8'
      },
    }

  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-s2cond(NOSTATUS|NOSTATUSBG|INPROGRESS|INPROGRESSBG|REVIEWING|REVIEWINGBG|COMPLETED|COMPLETEDBG)/
    },
    {
      pattern: /(bg|text|border)-third(LOGIN|WELCOME)/
    }
  ]
}