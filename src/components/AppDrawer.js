import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const drawerWidth = "8%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  drawerPaper: {
    width: drawerWidth,
    border: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    marginBottom: theme.spacing(3),
    color: "black",
    textDecoration: "none",
  },
  logo: {
    top: 20,
    position: "absolute",
  },
}));

const AppDrawer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.logo}>L</div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/nvishnuchakravarthi"
          className={classes.icon}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className={classes.icon}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/VishnuChakravarthi"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className={classes.icon}
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/Vishnucn18"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className={classes.icon}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/vishnu_isthename/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className={classes.icon}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100005214255713"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </Drawer>
    </React.Fragment>
  );
};

export default AppDrawer;
