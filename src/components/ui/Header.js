import * as React from "react";
import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MyComponent = styled("div")(({ theme }) => ({
  height: theme.mixins.toolbar.minHeight,
  marginBottom: "3em",
}));

const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "50px",
  height: "45px",
}));

export default function Header(props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              sx={{ padding: 0, "&:hover": { backgroundColor: "transparent" } }}
              onClick={() => {
                setValue(0);
              }}
              disableRipple
            >
              <Box
                component="img"
                alt="company logo"
                sx={{ height: "7em" }}
                src={logo}
              />
            </Button>
            <Tabs
              sx={{ marginLeft: "auto" }}
              value={value}
              onChange={handleChange}
              textColor="inherit"
            >
              <Tab label="Home" component={Link} to="/" />
              <Tab label="Services" component={Link} to="/services" />
              <Tab label="The Revolution" component={Link} to="/revolution" />
              <Tab label="About Us" component={Link} to="/about" />
              <Tab label="Contact Us" component={Link} to="/contact" />
              <EstimateButton variant="contained" color="secondary">
                Free Estimate
              </EstimateButton>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <MyComponent />
    </React.Fragment>
  );
}
