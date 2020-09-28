import imageProjWS from "../img/imageProjWS.jpg";
import blogWS from "../img/blogWS.png";
import navigationWS from "../img/navigationWS.png";
import seasonWS from "../img/seasonWS.jpg";
import ytWS from "../img/ytWS.jpg";

export const projectdata = [
  {
    Name: "Image App",
    Caption: "Displaying image from external api",
    Languages: "React Redux",
    ItemName: "Image Display App",
    Image: imageProjWS,
    Href: "https://imagedisplay.vercel.app/",
  },
  {
    Name: "YouTube Clone",
    Caption: "YouTube clone model with React hooks",
    Languages: "React Redux",
    contentPosition: "left",
    Image: ytWS,
    Href: "https://ytclone-hooks.vercel.app/",
  },
  {
    Name: "Season Display",
    Caption: "Detecting season of the place by GeoLocation",
    Languages: "React Js",
    ItemsName: "React Js",
    Image: seasonWS,
    Href: "https://seasondetector-basic.vercel.app/",
  },
  {
    Name: "Blogs",
    Caption: "Displaying fake blog posts from external api",
    Languages: "React Redux",
    contentPosition: "right",
    ItemName: "Blogs",
    Image: blogWS,
    Href: "https://blogposts-thunk.vercel.app/",
  },
  {
    Name: "Navigator",
    Caption: "Basic navigation without using React Router",
    Languages: "React Redux",
    contentPosition: "left",
    Image: navigationWS,
    Href: "https://page-navigation.vercel.app/",
  },
];
