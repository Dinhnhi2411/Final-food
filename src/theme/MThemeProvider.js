import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const PRIMARY = {

  lighter: "#FFE6EA",
  light: "#F7B0AA",
  main: "#FF8095",
  dark: "#CC0022",
  darker: "#660011",
  contrastText: "#FFF",
};
const SECONDARY = {
  maxlighter:"#E6FFFF",
  lighter: "#80deea",
  light: "#00acc1",
  main: "#0097a7",
  dark: "#00838f",
  darker: "#006064",
  contrastText: "#FFF",
};
const SUCCESS = {
  lighter: "#a5d6a7",
  light: "#43a047",
  main: "#388e3c",
  dark: "#2e7d32",
  darker: "#1b5e20",
  contrastText: "#FFF",
};
const ADDINS = {
  lighter:"#CCFF99",
  light:"#98FF02",
  main:"#84DE02",
  dark:"#579101",
  darker:"#2C4A01"
}
function MThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      success: SUCCESS,
      addins: ADDINS,
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MThemeProvider;
