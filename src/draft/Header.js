import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Tabs,
  Tab,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: "#ffffff0a",
    color: "black",
    width: `calc(100% - 8%)`,
    marginLeft: 100,
    boxShadow: "none",
  },
  toolbar: {
    minHeight: 50,
    alignItems: "flex-start",
    paddingBottom: theme.spacing(2),
    paddingLeft: 0,
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    fontSize: 18,
  },
  searchIcon: {
    top: 8,
  },
}));

const Header = () => {
  const classes = useStyles();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h1" noWrap>
            WELCOME .
          </Typography>
          <IconButton
            aria-label="search"
            color="inherit"
            className={classes.searchIcon}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
