import React from "react";
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

import imageProjWS from "../img/imageProjWS.jpg";
import blogWS from "../img/blogWS.png";
import navigationWS from "../img/navigationWS.png";
import seasonWS from "../img/seasonWS.jpg";
import ytWS from "../img/ytWS.jpg";
// import

export function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 2;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content" style={{ height: 200 }}>
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>
        <Typography className="Caption">{props.item.Caption}</Typography>
        <br />
        <Typography className="Languages">
          Languages used:{" "}
          <span style={{ fontSize: 14, fontWeight: 600 }}>
            {props.item.Languages}
          </span>
        </Typography>
        <Button variant="outlined" className="ViewButton">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={props.item.href}
            style={{ color: "black", textDecoration: "none" }}
          >
            {" "}
            View work
          </a>
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name} style={{ height: 200 }}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

export const items = [
  {
    Name: "Image App",
    Caption: "Displaying image from external api",
    Languages: "React Redux",
    contentPosition: "right",
    Items: [
      {
        Name: "Image Display App",
        Image: imageProjWS,
      },
    ],
    href: "https://imagedisplay.vercel.app/",
  },
  {
    Name: "Season Display",
    Caption: "Detecting season at the user's place by using GeoLocation",
    Languages: "React Js",
    contentPosition: "left",
    Items: [
      {
        Name: "React Js",
        Image: seasonWS,
      },
    ],
    href: "https://seasondetector-basic.vercel.app/",
  },
  {
    Name: "Blogs",
    Caption: "Displaying blog like posts using fake data from external api",
    Languages: "React Redux",
    contentPosition: "right",
    Items: [
      {
        Name: "Blogs",
        Image: blogWS,
      },
    ],
    href: "https://blogposts-thunk.vercel.app/",
  },

  {
    Name: "Navigator",
    Caption: "Basic navigation without using React Router",
    Languages: "React Redux",
    contentPosition: "left",
    Items: [
      {
        Name: "Navigator",
        Image: navigationWS,
      },
    ],
    href: "https://page-navigation.vercel.app/",
  },
];
