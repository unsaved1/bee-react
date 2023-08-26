import { createTheme } from "@mui/material";

const AppBtnTheme = createTheme({
    palette: {
          primary: {
              main: '#ff7300',
              light: '#ffc65f',
              dark: '#ff5407',
              contrastText: '#fff'
          },
          secondary: {
              light: '#ff7961',
              main: '#f44336',
              dark: '#ba000d',
              contrastText: '#000',
          },
    },
});

export default AppBtnTheme;
