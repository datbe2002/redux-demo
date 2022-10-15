import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import './App.css';
import AddUser from './Components/AddUser';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Arial',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {
  return (

    <ThemeProvider theme={theme}  >
      <AddUser></AddUser>

    </ThemeProvider>
  );
}

export default App;
