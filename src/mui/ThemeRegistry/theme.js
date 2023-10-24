
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#19252f',
      light: '#d9d9e6',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#708090',   // #778899	 #B0C4DE	
      paper: '#708090', 

    },
    button: {
      primary: '#ffffff',
    },
    text: {
        primary: '#ffffff',
      },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    h2: {
      fontSize: '4.75rem',
      letterSpacing: '0.07em',
        fontWeight: 420,
        color: '#F5F5DC',
    },
    body2: {
      fontSize: '1.25rem',
      letterSpacing: '0.05em',
      fontWeight: 420,
      color: '#ffffff',
    },
    h1: {
      fontSize: '9.2rem',
      letterSpacing: '0.16em',
        fontWeight: 420,
        color: '#d9d9e6',
    },
  },
});

export default theme;