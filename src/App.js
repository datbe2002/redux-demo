import { Container, createTheme, Grid, ThemeProvider } from "@material-ui/core";
// import { purple } from "@material-ui/core/colors";
import "./App.css";
import AddUser from "./Components/AddUser";
import User from "./Components/User";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#1769aa",
    },
  },
  typography: {
    fontFamily: "Arial",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <AddUser></AddUser>
          </Grid>
          <Grid item xs={6} md={8}>
            <User></User>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
