import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { projectdata } from "../data/projectdata";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 20,
  },
  projects: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: `calc(100% - 50px)`,
    overflowY: "scroll",
    fontFamily: "ROBOTO",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.primary,
    boxShadow: "none",
  },
  img: {
    width: "100%",
  },
  desc: {
    fontSize: "0.65rem",
  },
}));

const FourthComponent = ({ setScrollLock }) => {
  const classes = useStyles();

  const scrollLock = () => {
    setScrollLock(true);
  };

  const scrollLockRelease = () => {
    setScrollLock(false);
  };

  return (
    <div className="component fourth-component">
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm>
          <Typography variant="h5" component="h2" style={{ textAlign: "left" }}>
            Projects
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.projects}
          spacing={4}
          onMouseOver={() => scrollLock()}
          onMouseEnter={() => scrollLock()}
          onMouseLeave={() => scrollLockRelease()}
          // onScroll={(e) => handleScroll(e)}
        >
          {projectdata.map((value) => (
            <Grid key={value.Name} item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={value.Href}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {" "}
                        <img
                          className={classes.img}
                          alt="complex"
                          src={value.Image}
                        />
                      </a>
                    </ButtonBase>
                    <Grid
                      item
                      xs={12}
                      sm
                      container
                      style={{ justifyContent: "center", textAlign: "left" }}
                    >
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs style={{ height: 100 }}>
                          <Typography gutterBottom variant="subtitle1">
                            {value.Name}
                          </Typography>
                          <Typography
                            variant="body2"
                            gutterBottom
                            className={classes.desc}
                          >
                            {value.Caption}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            style={{ paddingTop: 10, fontSize: 12 }}
                          >
                            {value.Languages}
                          </Typography>
                        </Grid>
                        <Grid item style={{ bottom: 0 }}>
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={value.Href}
                            style={{
                              color: "black",
                              textDecoration: "none",
                              fontSize: 12,
                            }}
                          >
                            {" "}
                            View work
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default FourthComponent;
