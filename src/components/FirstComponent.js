import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InfoModal from "./InfoModal";

import mainimg from "../img/main1.jpg";
import subImage from "../img/animemain1.gif";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    right: 20,
    top: 100,
    height: "100%",
    boxShadow: "none",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  maindesc: {
    textAlign: "left",
    fontSize: 80,
    fontWeight: 600,
    letterSpacing: "1rem",
  },
  mainimg: {
    width: "100%",
  },
  subimage: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: "-10%",
  },
  cardcontent: {
    padding: 0,
  },
  secdesc: {
    color: "#828080",
    fontSize: "0.65rem",
    lineHeight: "1.1rem",
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

const FirstComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className="component first-component">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Card className={classes.root}>
            <CardContent className={classes.cardcontent}>
              <Typography
                variant="h5"
                component="h2"
                className={classes.maindesc}
              >
                <img alt="main img" src={mainimg} className={classes.mainimg} />
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.secdesc}
              >
                "If I had eight hours to chop down a tree, I'd spend six
                sharpening my axe".
                <br />
                Planning and preparation is everything.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setOpen(true)}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5} style={{ overflow: "hidden" }}>
          <div className={classes.subimage}>
            <img alt="sub img" src={subImage} width="100%" height="auto" />
          </div>
        </Grid>
      </Grid>
      {open ? (
        <InfoModal heading="Objective" open={open} setOpen={setOpen}>
          <p></p>
        </InfoModal>
      ) : null}
    </div>
  );
};

export default FirstComponent;
