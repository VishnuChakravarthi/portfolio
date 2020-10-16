import React from "react";
import TimelineDot from "@material-ui/lab/TimelineDot";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WorkIcon from "@material-ui/icons/Work";

export const educationData = [
  {
    type: "Internship",
    subType: "",
    place: "Hawking Industries Pvt. Ltd.",
    start: "Feb 2020",
    end: "Aug 2020",
    timelineDot: () => (
      <TimelineDot variant="outlined">
        <WorkIcon />
      </TimelineDot>
    ),
  },
  {
    type: "Master of Science",
    subType: "Software Development",
    place: "Coventry University, UK",
    start: "Sep 2018",
    end: "Jan 2020",
    timelineDot: () => (
      <TimelineDot color="primary">
        <MenuBookIcon />
      </TimelineDot>
    ),
  },
  {
    type: "Master of Science",
    subType: "Computer Science",
    place: "Middlesex University, UK",
    start: "Sep 2016",
    end: "Jan 2018",
    timelineDot: () => (
      <TimelineDot color="primary" variant="outlined">
        <MenuBookIcon />
      </TimelineDot>
    ),
  },
  {
    type: "Web Developer",
    subType: "",
    place: "Neemtec Solutions",
    start: "Nov 2015",
    end: "May 2016",
    timelineDot: () => (
      <TimelineDot color="secondary">
        <WorkIcon />
      </TimelineDot>
    ),
  },
  {
    type: "Bachelor of Engineering",
    subType: "Electronics and Communication",
    place: "Nellai College of Engineering",
    start: "Aug 2011",
    end: "May 2015",
    timelineDot: () => (
      <TimelineDot color="primary" variant="outlined">
        <MenuBookIcon />
      </TimelineDot>
    ),
  },
];
