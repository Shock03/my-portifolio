import { createTheme, responsiveFontSizes } from "@mui/material";

// Criação do tema utilizando a MUI.
let theme = createTheme({
    palette: {
      primary: {
        main: '#161b22',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
    typography: {
        fontFamily: '-apple-system',
        fontSize: 13,
    }
  });

  theme = responsiveFontSizes (theme);

  export default theme