import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { educationData } from "../data/educationData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 20,
  },
  edu: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: `calc(80% - 0px)`,
    overflowY: "scroll",
    fontFamily: "ROBOTO",
    padding: "32px 0px",
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
}));

const Education = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Education;
