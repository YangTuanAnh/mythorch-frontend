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
        thirdWELCOME: '#66C4E8',
        fourthBLUE: '#007EAE',
        fourthBLUEBG: '#CCEBF7',
        fourthBLUEBUTTON: '#009DD9'
      },
    }

  },
  plugins: [
    ({ addVariant }) => {
      // based on: https://github.com/tailwindlabs/tailwindcss/blob/f116f9f6648af81bf22e0c28d01a8da015a53180/src/corePlugins.js#L61-L129
      [
        // Positional
        ['first', ':first-child'],
        ['last', ':last-child'],
        ['only', ':only-child'],
        ['odd', ':nth-child(odd)'],
        ['even', ':nth-child(even)'],
        'first-of-type',
        'last-of-type',
        'only-of-type',

        // State
        'visited',
        'target',
        ['open', '[open]'],

        // Forms
        'default',
        'checked',
        'indeterminate',
        'placeholder-shown',
        'autofill',
        'required',
        'valid',
        'invalid',
        'in-range',
        'out-of-range',
        'read-only',

        // Content
        'empty',

        // Interactive
        'focus-within',
        'hover',
        'focus',
        'focus-visible',
        'active',
        'disabled',
      ]
        .map((variant) =>
          Array.isArray(variant) ? variant : [variant, `:${variant}`]
        )
        .forEach(([variantName, state]) => {
          addVariant(`parent-${variantName}`, `:merge(.parent)${state} > &`);
        });
    }
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-s2cond(NOSTATUS|NOSTATUSBG|INPROGRESS|INPROGRESSBG|REVIEWING|REVIEWINGBG|COMPLETED|COMPLETEDBG)/
    },
    {
      pattern: /(bg|text|border)-third(LOGIN|WELCOME)/
    }, ,
    {
      pattern: /(bg|text|border)-fourth(BLUE|BLUEBG|BLUEBUTTON)/
    },
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/
    },
    {
      pattern: /flex-.*/
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/
    },
    {
      pattern: /(w|h)-[0-9]+/
    }
  ]
}