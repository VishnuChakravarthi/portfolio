import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import headshot from "../img/owner.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    right: 20,
    top: 100,
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    boxShadow: "none",
  },
  card2: {
    textAlign: "center",
    boxShadow: "none",
  },
  cardcontent: {
    padding: 0,
  },
  maindesc: {
    textAlign: "left",
    lineHeight: "4rem",
    letterSpacing: "0.1rem",
    color: "#000",
  },
  mainimg: {
    width: "60%",
  },
  secdesc: {
    lineHeight: "1.3rem",
    fontSize: "0.85rem",
    color: "#828080",
  },
  maindescletter: {
    fontSize: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  contact: {
    color: "black",
    paddingBottom: "10px",
  },
  degree: {
    fontStyle: "italic",
    fontSize: "0.85rem",
  },
}));

const SecondComponent = ({ setScrollLock }) => {
  const classes = useStyles();

  return (
    <div className="component second-component">
      <Grid container spacing={2}>
        <Grid className={classes.root} item xs={12} sm>
          <Card className={classes.card}>
            <CardContent className={classes.cardcontent}>
              <Typography
                variant="h5"
                component="h2"
                className={classes.maindesc}
              >
                N Vishnu Chakravarthi{" "}
                <span className={classes.degree}>B.E, M.Sc.(U.K.)</span>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.contact}
              >
                nvishnuchakravarthi@gmail.com | +91 9944893026
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.secdesc}
              >
                Passionate, reliable and detailed-oriented individual looking to
                work as software engineer.
                <br />
                Offering expertise in React Js, Java, JavaScript, HTML, CSS and
                core web design.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.root} item xs={12} sm>
          <Card className={classes.card2}>
            <CardContent className={classes.cardcontent}>
              <img alt="Owners pho" src={headshot} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SecondComponent;
