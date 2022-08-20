import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "RaleWay",
          textTransform: "none",
          fontWeight: 700,
          fontSize: "1rem",
          color: "white",
          minWidth: 10,
          marginLeft: 25,
        },
      },
    },
  },
  typography: {
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
