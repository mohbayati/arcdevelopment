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

  typography: {
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    tab: {
      fontFamily: "RaleWay",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
      minWidth: 10,
      marginLeft: 25,
    },
    h2: {
      fontFamily: "RaleWay",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
    },
  },
});
