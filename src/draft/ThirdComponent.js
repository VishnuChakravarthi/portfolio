import React from "react";
import ReactPageScroller from "react-page-scroller";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { projectdata } from "../data/projectdata";
import Carousel from "react-material-ui-carousel";
import "../css/carousel.css";

import { Banner, items } from "./Banner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "60px 20px 60px 0px;",
  },
  card: {
    width: "100%",
    boxShadow: "none",
  },
  carouselContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  carousel: {
    width: "80%",
    boxShadow: "0px 9px 21px -7px black",
    height: 200,
  },
  paper: {
    height: 150,
    width: 120,
  },
  innercontainer: {
    width: `calc(92% + 80px)`,
  },
  pos: {
    fontSize: "0.65rem",
    lineHeight: "1.1rem",
    color: "#828080",
  },
}));

const ThirdComponent = () => {
  const classes = useStyles();

  return (
    <div className="component third-component">
      <Grid container spacing={2} className={classes.root}>
        <Card className={classes.card}>
          <CardContent style={{ paddingLeft: 0 }}>
            <Typography
              variant="h5"
              component="h2"
              style={{ textAlign: "left" }}
            >
              Projects Undertaken
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Below are the projects I have developed with latest tach stacks.
            </Typography>
            {/* <Typography variant="body2" component="p">
              
            </Typography> */}
          </CardContent>
        </Card>
        <div className={classes.carouselContainer}>
          <Carousel
            className={classes.carousel}
            autoPlay={false}
            animation="fade"
            indicators={false}
            timeout={500}
            navButtonsAlwaysVisible={true}
          >
            {items.map((item, index) => {
              return (
                <Banner
                  item={item}
                  key={index}
                  contentPosition={item.contentPosition}
                />
              );
            })}
          </Carousel>
        </div>
      </Grid>
    </div>
  );
};

export default ThirdComponent;
