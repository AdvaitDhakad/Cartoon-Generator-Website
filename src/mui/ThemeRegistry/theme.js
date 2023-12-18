import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#19252f",
      light: "#d9d9e6",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#708090",
      // "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);",
      // default: "#708090", // #778899	 #B0C4DE
      paper: "#708090",
    },
    button: {
      primary: "#ffffff",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    h2: {
      fontSize: "4.75rem",
      letterSpacing: "0.07em",
      fontWeight: 420,
      color: "#F5F5DC",
    },
    body2: {
      fontSize: "1.25rem",
      letterSpacing: "0.05em",
      fontWeight: 420,
      color: "#ffffff",
    },
    h1: {
      fontSize: "9.2rem",
      letterSpacing: "0.16em",
      fontWeight: 420,
      color: "#d9d9e6",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba( 255, 255, 255, 0.1 )",
          blockOverflow: "visible",
          backdropFilter: "blur( 10px )",
          webkitBackdropFilter: "blur( 10px )",
          boxShadow: "0 2px 16px 0 rgba( 31, 38, 135, 0.37 )",
          borderRadius: 10,
          border: "2px solid rgba( 255, 255, 255, 0.18 )",
          zIndex: 4,
        },
      },
    },
  },
});

export default theme;
