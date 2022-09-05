import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled, useTheme } from "@mui/material/styles";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

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
  height: theme.mixins.toolbar.minHeight + 10,
  marginBottom: "3em",
  [theme.breakpoints.down("lg")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "0.71em",
  },
}));

const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "50px",
  height: "45px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    {...props}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    elevation={0}
    sx={{ zIndex: 1302 }}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.tab,
  opacity: 0.7,
  "&:hover": {
    opacity: 1,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  height: "8em",
  [theme.breakpoints.down("lg")]: {
    height: "7em",
  },
  [theme.breakpoints.down("md")]: {
    height: "5.5em",
  },
}));

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.common.orange,
}));
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.tab,
  opacity: 0.7,
}));
export default function Header({
  selectedIndex,
  setSelectedIndex,
  value,
  setValue,
}) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleMenuItemClick = (i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };
  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "sample-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (e) => handleClick(e),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, routes, selectedIndex]);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        sx={{ marginLeft: "auto" }}
        value={value}
        onChange={handleChange}
        textColor="inherit"
      >
        {routes.map((route) => (
          <StyledTab
            key={route.name}
            label={route.name}
            component={Link}
            to={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
        <EstimateButton variant="contained" color="secondary">
          Free Estimate
        </EstimateButton>
        <StyledMenu
          onClose={handleClose}
          id="sample-menu"
          anchorEl={anchorEl}
          open={openMenu}
          MenuListProps={{ onMouseLeave: handleClose }}
        >
          {menuOptions.map((option, index) => (
            <StyledMenuItem
              key={option.name}
              component={Link}
              to={option.link}
              onClick={() => {
                handleMenuItemClick(index);
                setValue(1);
                handleClose();
              }}
              selected={index === selectedIndex && value === 1}
            >
              {option.name}
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </Tabs>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <StyledSwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
      >
        <MyComponent />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.name}
              divider
              button
              component={Link}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              to={route.link}
              selected={value === route.activeIndex}
            >
              <StyledListItemText
                sx={value === route.activeIndex ? { opacity: 1 } : null}
                disableTypography
              >
                {route.name}
              </StyledListItemText>
            </ListItem>
          ))}
          <StyledListItem
            divider
            button
            component={Link}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            to="/estimate"
            selected={value === 5}
          >
            <StyledListItemText
              sx={value === 5 ? { opacity: 1 } : null}
              disableTypography
            >
              Free Estimate
            </StyledListItemText>
          </StyledListItem>
        </List>
      </StyledSwipeableDrawer>
      <IconButton
        sx={{
          marginLeft: "auto",
          "&:hover": { backgroundColor: "transparent" },
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ height: "50px", width: "50px" }} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          color="primary"
          sx={(theme) => ({
            zIndex: theme.zIndex.modal + 1,
          })}
        >
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
              <StyledBox component="img" alt="company logo" src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <MyComponent />
    </React.Fragment>
  );
}
