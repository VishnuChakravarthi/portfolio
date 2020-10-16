import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
// import TimelineDot from "@material-ui/lab/TimelineDot";
// import MenuBookIcon from "@material-ui/icons/MenuBook";
// import WorkIcon from "@material-ui/icons/Work";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import { educationData } from "../data/educationData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    marginTop: "20px",
  },
  gridPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontFamily: "Roboto",
    boxShadow: "none",
  },
  eduSec: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: `calc(90% - 20px)`,
    overflowY: "scroll",
    fontFamily: "ROBOTO",
    padding: theme.spacing(4),
  },
  paperEdu: {},
  paper: {
    padding: "6px 16px",
    textAlign: "left",
  },
  leftContent: {
    // flex: "none",
  },
}));

const ThirdComponent = ({ setScrollLock }) => {
  const classes = useStyles();

  const scrollLock = () => {
    setScrollLock(true);
  };

  const scrollLockRelease = () => {
    setScrollLock(false);
  };

  // const isBottom = (el) => {
  //   console.log(el.getBoundingClientRect().bottom);
  //   console.log("window.innerHeight", window.innerHeight);
  //   return el.getBoundingClientRect().bottom <= window.innerHeight;
  // };

  // const trackScrolling = () => {
  //   const wrappedElement = document.getElementById("edu");
  //   if (isBottom(wrappedElement)) {
  //     console.log("header bottom reached");
  //     scrollLockRelease();
  //   }
  // };

  const handleScroll = (e) => {
    console.log("scrollLock");
    // scrollLock();
    setScrollLock(true);
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("end");
      // scrollLockRelease();
      setScrollLock(false);
    }
  };

  return (
    <div className="component third-component">
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} onTouchStart={() => scrollLockRelease()}>
          <Paper className={classes.gridPaper}>
            {" "}
            <h2 id="simple-modal-title">Education & Training</h2>
          </Paper>
        </Grid>

        <Grid
          id="edu"
          container
          spacing={4}
          className={classes.eduSec}
          onMouseOver={() => scrollLock()}
          onMouseEnter={() => scrollLock()}
          onTouchStart={() => scrollLock()}
          onMouseLeave={() => scrollLockRelease()}
          // onScroll={(e) => handleScroll(e)}
          // onEndReached={() => scrollLockRelease()}
        >
          <Grid item xs={12} sm={12} className={classes.paperEdu}>
            <Paper>
              <Timeline align="alternate">
                {educationData.map((edu) => (
                  <TimelineItem key={edu.start}>
                    <TimelineOppositeContent className={classes.leftContent}>
                      <Typography variant="body2" color="textSecondary">
                        {edu.start} - <br />
                        {edu.end}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      {/* <TimelineDot variant="outlined">
              <WorkIcon />
            </TimelineDot> */}
                      {edu.timelineDot()}
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          {edu.type}
                        </Typography>
                        <Typography>{edu.subType}</Typography>
                        <Typography>{edu.place}</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ThirdComponent;
