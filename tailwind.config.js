/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        applayout: "4rem 1fr"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "applight", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors  
        },
        // ... custom themes
        applight: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#D95D39",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#2C5EF4",
              foreground: "#FFFFFF",
            },
            success: {
              DEFAULT: "#63C12C",
              foreground: "#FFFFFF",
            },
            warning: {
              DEFAULT: "#FFD900",
              foreground: "#525252",
            },
            danger: {
              DEFAULT: "#F42443",
              foreground: "#FFFFFF",
            },
            focus: "#D95D39",
          },
        },
      },
    }
  )],
}

