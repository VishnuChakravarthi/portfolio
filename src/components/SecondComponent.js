import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import headshot from "../img/owner.jpg";
import InfoModal from "./InfoModal";
import Education from "./Education";

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
    lineHeight: "1.1rem",
    fontSize: "0.65rem",
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
}));

const SecondComponent = ({ scrollLock, setScrollLock }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  console.log(scrollLock);

  const modalOpen = () => {
    setOpen(true);
    setScrollLock(true);
  };

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
                N Vishnu Chakravarthi
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.secdesc}
              >
                Passionate, reliable and detailed-oriented individual looking to
                work as software engineer.
                <br />
                Offering expertise in Java, React Js, JavaScript, HTML, CSS and
                core web design.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => modalOpen()}
                style={{ fontSize: 12 }}
              >
                Learn More
              </Button>
            </CardActions>
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
      {open ? (
        <InfoModal
          heading="Education & Training"
          open={open}
          setOpen={setOpen}
          setScrollLock={setScrollLock}
        >
          <Education />
        </InfoModal>
      ) : null}
    </div>
  );
};

export default SecondComponent;
