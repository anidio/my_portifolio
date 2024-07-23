import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#551fbd",
    },
    secondary: {
      main: "#a2eacb",
    },
  },
  typography:{
    fontFamily: "Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme);

export default theme