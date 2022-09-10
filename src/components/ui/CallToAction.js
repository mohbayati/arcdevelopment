import {
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ButtonArrow from "../ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";

export default function CallToAction({ setValue }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={{
        height: "60em",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          backgroundImage: `url(${mobileBackground})`,
          backgroundAttachment: "inherit",
        },
      }}
      alignItems="center"
      justifyContent={matchesMD ? "center" : "space-between"}
      direction={matchesMD ? "column" : "row"}
    >
      <Grid
        item
        sx={{
          marginLeft: matchesMD ? 0 : "5em",
          textAlign: matchesMD ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2">
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              item
              justifyContent={matchesMD ? "center" : undefined}
            >
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                onClick={() => setValue(2)}
                sx={(theme) => ({
                  ...theme.typography.learnButton,
                  fontSize: "0.9rem",
                  height: "45px",
                  width: "145px",
                })}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                ></ButtonArrow>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item justifyContent={matchesMD ? "center" : undefined}>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          onClick={() => setValue(5)}
          sx={(theme) => ({
            ...theme.typography.estimate,
            borderRadius: 50,
            height: 80,
            width: 205,
            backgroundColor: theme.palette.common.orange,
            mr: "5em",
            ml: "2em",
            [theme.breakpoints.down("md")]: {
              mr: 0,
              ml: 0,
            },
          })}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
