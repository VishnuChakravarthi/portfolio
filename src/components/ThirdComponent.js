import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Certification from "./Certification";
import Education from "./Education";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 20,
  },
  edu: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: `calc(90% - 0px)`,
    // overflowY: "scroll",
    fontFamily: "ROBOTO",
    // padding: "0px 32px",
    marginTop: "-8%",
  },
  paper: {
    textAlign: "left",
    padding: "6px 16px",
    color: theme.palette.text.primary,
  },
  img: {
    width: "100%",
  },
  desc: {
    fontSize: "0.75rem",
  },
  tabsmain: {
    background: "white",
    boxShadow: "none",
    color: "black",
  },

  tabpanel: {
    height: `calc(80% - 0px)`,
  },
}));

// const element = React.createRef();

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const tabpanelmain = {
    width: "100%",
    height: "calc(80% - 0px)",
    overflowY: "scroll",
    padding: "0px 24px",
  };
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={tabpanelmain}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ThirdTest = ({ setScrollLock }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollLock = () => {
    setScrollLock(true);
  };

  const scrollLockRelease = () => {
    setScrollLock(false);
  };

  // const handleScroll = (event) => {
  //   setScrollLock(true);
  //   const target = event.target;
  //   if (target.scrollHeight - target.scrollTop === target.clientHeight) {
  //     setScrollLock(false);
  //   }
  // };

  return (
    <div className="component third-component">
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm onTouchStart={() => scrollLockRelease()}>
          <AppBar className={classes.tabsmain} position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              centered
            >
              <Tab label="Education & Training" {...a11yProps(0)} />
              <Tab label="Certification" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
        </Grid>
        <Grid container className={classes.edu} spacing={4}>
          <TabPanel
            value={value}
            index={0}
            onMouseOver={() => scrollLock()}
            onMouseEnter={() => scrollLock()}
            onTouchStart={() => scrollLock()}
            onMouseLeave={() => scrollLockRelease()}
            // onScroll={(e) => handleScroll(e)}
            // ref={element}
          >
            <Education />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Certification />
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
};

export default ThirdTest;
