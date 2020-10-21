import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { projectdata } from "../data/projectdata";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Certification from "./Certification";
import Education from "./Education";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginTop: 20,
  },
  main: {
    overflowY: "scroll",
    overflowX: "hidden",
    /* width: 92%; */
    marginTop: "-10px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    /* position: absolute; */
    marginRight: "-20px",
  },
  edu: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // height: `calc(90% - 0px)`,
    // overflowY: "scroll",
    fontFamily: "ROBOTO",
    // padding: "0px 32px",
    // marginTop: "-8%",
  },
  paper: {
    textAlign: "left",
    // padding: "6px 16px",
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
    // height: `calc(80% - 0px)`,
  },
  projects: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // height: `calc(80% - 50px)`,
    // overflowY: "scroll",
    fontFamily: "ROBOTO",
    padding: theme.spacing(4),
  },
  //   paper: {
  //     textAlign: "center",
  //     color: theme.palette.text.primary,
  //   },
  //   img: {
  //     width: "100%",
  //   },
  //   desc: {
  //     fontSize: "0.75rem",
  //   },
  headerFloat: {
    position: "absolute",
    top: "299%",
    zIndex: 1,
    width: "90%",
    background: "white",
    // padding: "20px !important",
  },
  certfication: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 500,
  },
  projectTabs: {
    flexGrow: 1,
    boxShadow: "none",
  },
}));

const education = React.createRef();
const project = React.createRef();
const certification = React.createRef();

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const tabpanelmain = {
    width: "100%",
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

const FinalComponent = ({ setScrollLock }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [projValue, setProjValue] = React.useState(0);
  const [projStick, setProjStick] = React.useState(false);
  const [eduStick, setEduStick] = React.useState(false);
  const [projectList, setProjectList] = React.useState(projectdata);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProjChange = (event, newValue) => {
    setProjValue(newValue);

    if (newValue === 0) {
      setProjectList(projectdata);
    }
    if (newValue === 1) {
      const projects = projectdata.filter((project) =>
        project.tags.includes("reactjs")
      );
      setProjectList(projects);
    }
    if (newValue === 2) {
      const projects = projectdata.filter((project) =>
        project.tags.includes("nodejs")
      );
      setProjectList(projects);
    }
  };

  const scrollLockRelease = () => {
    setScrollLock(false);
  };

  const handleScroll = (event) => {
    setScrollLock(true);
    const target = event.target;
    // console.log(target.scrollTop);
    if (target.scrollTop === 0) {
      setScrollLock(false);
    }
    const eduTop = education.current.getBoundingClientRect().top;
    const eduBottom = education.current.getBoundingClientRect().bottom;
    if (eduBottom > 150 && eduTop <= 0) {
      setEduStick(true);
    } else if (eduBottom <= 100 || eduTop >= 0) {
      setEduStick(false);
    }

    if (project.current.getBoundingClientRect().top <= 0) {
      setProjStick(true);
    } else {
      setProjStick(false);
    }
  };

  const viewCertification = () => {
    if (certification.current) {
      certification.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="component fourth-component">
      <div
        // onMouseOver={() => scrollLock()}
        // onMouseEnter={() => scrollLock()}
        // onTouchStart={() => scrollLock()}
        // onMouseLeave={() => scrollLockRelease()}
        onScroll={(e) => handleScroll(e)}
        className={classes.main}
      >
        <Grid container spacing={2} className={classes.root} ref={education}>
          <Grid
            item
            xs={12}
            sm
            ref={certification}
            onTouchStart={() => scrollLockRelease()}
          >
            <AppBar className={classes.tabsmain} position="static">
              {eduStick ? (
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  centered
                  className={classes.headerFloat}
                >
                  <Tab label="Education & Training" {...a11yProps(0)} />
                  <Tab
                    label="Certification"
                    {...a11yProps(1)}
                    onClick={viewCertification}
                  />
                </Tabs>
              ) : (
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  centered
                  style={{ position: "relative" }}
                >
                  <Tab label="Education & Training" {...a11yProps(0)} />
                  <Tab label="Certification" {...a11yProps(1)} />
                </Tabs>
              )}
            </AppBar>
          </Grid>
          <Grid container className={classes.edu} spacing={4}>
            <TabPanel value={value} index={0}>
              <Education />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Certification />
            </TabPanel>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.root}>
          <Grid
            item
            xs={12}
            sm
            ref={project}

            // className={projStick === "touched" ? classes.headerFloat : ""}
          >
            {projStick ? (
              <Typography
                variant="h5"
                component="h2"
                style={{ textAlign: "left", padding: "20px" }}
                className={classes.headerFloat}
              >
                Projects
              </Typography>
            ) : (
              <Typography
                variant="h5"
                component="h2"
                style={{ textAlign: "left" }}
              >
                Projects
              </Typography>
            )}
          </Grid>
          <Grid key={value.Name} item xs={12} sm={12}>
            <Paper className={classes.projectTabs}>
              <Tabs
                value={projValue}
                onChange={handleProjChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="All" />
                <Tab label="ReactJs" />
                <Tab label="NodeJs" />
              </Tabs>
            </Paper>
          </Grid>
          <Grid container className={classes.projects} spacing={4}>
            {projectList.map((value) => (
              <Grid key={value.Name} item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={value.Href}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          {" "}
                          <img
                            className={classes.img}
                            alt="complex"
                            src={value.Image}
                          />
                        </a>
                      </ButtonBase>
                      <Grid
                        item
                        xs={12}
                        sm
                        container
                        style={{ justifyContent: "center", textAlign: "left" }}
                      >
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs style={{ height: 100 }}>
                            <Typography gutterBottom variant="subtitle1">
                              {value.Name}
                            </Typography>
                            <Typography
                              variant="body2"
                              gutterBottom
                              className={classes.desc}
                            >
                              {value.Caption}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              style={{ paddingTop: 10, fontSize: 12 }}
                            >
                              {value.Languages}
                            </Typography>
                          </Grid>
                          <Grid item style={{ bottom: 0 }}>
                            <a
                              rel="noopener noreferrer"
                              target="_blank"
                              href={value.Href}
                              style={{
                                color: "black",
                                textDecoration: "none",
                                fontSize: 14,
                              }}
                            >
                              {" "}
                              View work -->>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FinalComponent;
