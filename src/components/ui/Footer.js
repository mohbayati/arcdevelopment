import { Box, Grid, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom",
  [theme.breakpoints.down("lg")]: {
    width: "21em",
  },
  [theme.breakpoints.down("md")]: {
    width: "15em",
  },
}));
const StyledIcon = styled("img")(({ theme }) => ({
  height: "4em",
  width: "4em",
  // [theme.breakpoints.down("lg")]: {
  //   width: "21em",
  // },
  [theme.breakpoints.down("sm")]: {
    height: "2.5em",
    width: "2.5em",
  },
}));

const StyledMainContainerGrid = styled(Grid)(({ theme }) => ({
  position: "absolute",
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textDecoration: "none",
}));

export default function Footer({
  selectedIndex,
  setSelectedIndex,
  value,
  setValue,
}) {
  const hidden = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <StyledFooter>
      {hidden ? null : (
        <StyledMainContainerGrid justifyContent="center" container>
          <Grid item sx={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <StyledGridItem
                item
                onClick={() => setValue(0)}
                component={Link}
                to="/"
              >
                Home
              </StyledGridItem>
            </Grid>
          </Grid>
          <Grid item sx={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <StyledGridItem
                item
                onClick={() => setValue(1)}
                component={Link}
                to="/services"
              >
                Services
              </StyledGridItem>
              <StyledGridItem
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                component={Link}
                to="/customsoftware"
              >
                Custom Software Development
              </StyledGridItem>
              <StyledGridItem
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                component={Link}
                to="/mobileapps"
              >
                iOS/Android Development
              </StyledGridItem>
              <StyledGridItem
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                component={Link}
                to="/websites"
              >
                Website Development
              </StyledGridItem>
            </Grid>
          </Grid>
          <Grid item sx={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <StyledGridItem
                item
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
              >
                Revolution
              </StyledGridItem>
              <StyledGridItem
                item
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
              >
                Vision
              </StyledGridItem>
              <StyledGridItem
                item
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
              >
                Technology
              </StyledGridItem>
              <StyledGridItem
                item
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
              >
                Process
              </StyledGridItem>
            </Grid>
          </Grid>
          <Grid item sx={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <StyledGridItem
                item
                onClick={() => setValue(3)}
                component={Link}
                to="/about"
              >
                About Us
              </StyledGridItem>
              <StyledGridItem
                item
                onClick={() => setValue(3)}
                component={Link}
                to="/about"
              >
                History
              </StyledGridItem>
              <StyledGridItem
                item
                onClick={() => setValue(3)}
                component={Link}
                to="/about"
              >
                Team
              </StyledGridItem>
            </Grid>
          </Grid>
          <Grid item sx={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <StyledGridItem
                item
                onClick={() => setValue(4)}
                component={Link}
                to="/contact"
              >
                Contact Us
              </StyledGridItem>
            </Grid>
          </Grid>
        </StyledMainContainerGrid>
      )}
      <StyledImg alt="black decorative slash" src={footerAdornment} />
      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        sx={(theme) => ({
          position: "absolute",
          marginTop: "-6em",
          right: "1.5em",
          [theme.breakpoints.down("sm")]: {
            right: "0.6em",
          },
        })}
      >
        <Grid
          item
          component={"a"}
          herf="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <StyledIcon alt="facebook logo" src={facebook} />
        </Grid>
        <Grid
          item
          component={"a"}
          herf="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <StyledIcon alt="twitter logo" src={twitter} />
        </Grid>
        <Grid
          item
          component={"a"}
          herf="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <StyledIcon alt="instagram logo" src={instagram} />
        </Grid>
      </Grid>
    </StyledFooter>
  );
}
