import { Button, Grid, Typography, useTheme } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ButtonArrow";

export default function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      sx={{
        marginTop: "5em",
        [theme.breakpoints.down("md")]: { marginTop: "3em" },
        [theme.breakpoints.down("xs")]: { marginTop: "2em" },
      }}
    >
      <Grid item>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid
            item
            sm
            sx={{
              minWidth: "25.5em",
              marginLeft: "1em",
              // [theme.breakpoints.down("md")]: {
              //   minWidth: "15.5em",
              // },
              [theme.breakpoints.down("xs")]: {
                marginLeft: 0,
              },
            }}
          >
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  sx={(theme) => ({
                    ...theme.typography.estimate,
                    backgroundColor: theme.palette.common.orange,
                    borderRadius: 50,
                    height: 45,
                    width: 145,
                    marginRight: 10,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.light,
                    },
                  })}
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  sx={(theme) => ({
                    borderColor: theme.palette.common.blue,
                    color: theme.palette.common.blue,
                    borderWidth: 2,
                    textTransform: "none",
                    borderRadius: 50,
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    height: 45,
                    width: 145,
                  })}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  ></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            sx={{
              maxWidth: "50em",
              minWidth: "21em",
              marginTop: "2em",
              marginLeft: "10%",
              [theme.breakpoints.down("sm")]: {
                maxWidth: "30em",
              },
            }}
          >
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
