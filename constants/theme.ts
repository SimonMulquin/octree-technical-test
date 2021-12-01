import { createTheme } from "@material-ui/core";

// I used https://material.io/resources/color to pick colors for the theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#46476b",
      light: "#727299",
      dark: "#1c2040",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fce7da",
      light: "#ffffff",
      dark: "#c9b5a8",
      contrastText: "#000000",
    },
    // Dark variants with black contrastText could pose accessibility problems
    error: {
      main: "#fc5a62",
      light: "#ff8d8f",
      dark: "#c32038",
      contrastText: "#000000",
    },
    success: {
      main: "#18b558",
      light: "#5fe886",
      dark: "#00842c",
      contrastText: "#000000",
    },
    warning: {
      main: "#ffab00",
      light: "#ffdd4b",
      dark: "#c67c00",
      contrastText: "#000000",
    },
  },
});

export default theme;
