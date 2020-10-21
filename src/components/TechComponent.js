import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import techdata from "../data/techstackData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // height: 140,
    // width: 100,
    alignItems: "center",
    // justifyContent: "center",
    display: "flex",
    padding: "10px 0px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgdiv: {
    width: "50%",
    // height: 120,
    display: "flex",
    alignItems: "center",
  },
  desc: {
    fontSize: "24px",
    fontFamily: "Roboto",
    fontWeight: 600,
  },
  gridcontainer: {
    padding: 20,
  },
}));

const TechComponent = ({ setScrollLock }) => {
  const classes = useStyles();

  return (
    <div className="component third-component">
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.content}>
          <Grid
            container
            justify="center"
            className={classes.gridcontainer}
            spacing={3}
          >
            {techdata.map((value) => (
              <Grid key={value.name} xs={6} sm={3} item>
                <Paper className={classes.paper}>
                  <div className={classes.imgdiv}>
                    <img alt="logo" src={value.image} width="100%" />
                  </div>
                  <span className={classes.desc}>{value.name}</span>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TechComponent;
