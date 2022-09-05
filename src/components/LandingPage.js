import {
  Button,
  Grid,
  Typography,
  useTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const SpacialText = styled("span")(({ theme }) => ({
  color: theme.palette.common.orange,
  fontFamily: "Pacifico",
}));

const StyledIcon = styled("img")(({ theme }) => ({
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

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
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
        {/*----------Hero Block-----------*/}
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
                    height: "45px",
                    width: "145px",
                    marginRight: "40px",
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
                    ...theme.typography.learnButton,
                    fontSize: "0.9rem",
                    height: "45px",
                    width: "145px",
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
      <Grid item>
        {/*----------Services Block-----------*/}
        <Grid
          container
          direction="row"
          sx={{
            mt: "12em",
            [theme.breakpoints.down("md")]: {
              padding: 2,
            },
          }}
          justifyContent={matches ? "center" : undefined}
        >
          <Grid
            item
            sx={{
              ml: matches ? 0 : "5em",
              textAlign: matches ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" sx={{ mb: "1em" }}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <SpacialText>celebration</SpacialText>
            </Typography>
            <Button
              variant="outlined"
              sx={(theme) => ({
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: "35px",
                padding: "5px",
                [theme.breakpoints.down("md")]: {
                  marginBottom: "2em",
                },
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
          <Grid item>
            <StyledIcon alt="custom software icon" src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----------iOS/Android Block--------*/}
        <Grid
          container
          direction="row"
          sx={{
            mt: "12em",
            [theme.breakpoints.down("md")]: {
              padding: 2,
            },
          }}
          justifyContent={matches ? "center" : "flex-end"}
        >
          <Grid
            item
            sx={{
              textAlign: matches ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" sx={{ mb: "1em" }}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Increase your web experience or create a standalone App{" "}
              {matches ? null : <br />}with either mobile platform.
              <SpacialText>celebration</SpacialText>
            </Typography>
            <Button
              variant="outlined"
              sx={(theme) => ({
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: "35px",
                padding: "5px",
                [theme.breakpoints.down("md")]: {
                  marginBottom: "2em",
                },
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
          <Grid
            item
            sx={{
              mr: matches ? 0 : "5em",
            }}
          >
            <StyledIcon alt="mobile icon" src={mobileAppsIcon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----------Websites Block-----------*/}
        <Grid
          container
          direction="row"
          sx={{
            mt: "12em",
            [theme.breakpoints.down("md")]: {
              padding: 2,
            },
          }}
          justifyContent={matches ? "center" : undefined}
        >
          <Grid
            item
            sx={{
              ml: matches ? 0 : "5em",
              textAlign: matches ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" sx={{ mb: "1em" }}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, build for speed.
            </Typography>
            <Button
              variant="outlined"
              sx={(theme) => ({
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: "35px",
                padding: "5px",
                [theme.breakpoints.down("md")]: {
                  marginBottom: "2em",
                },
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
          <Grid item>
            <StyledIcon alt="websites icon" src={websitesIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
