import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "ROBOTO",
    position: "absolute",
    outline: 0,
    // minWidth: "75%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "5%",
    height: "80%",
    overflowY: "scroll",
  },
  closeicon: {
    float: "right",
    cursor: "pointer",
  },
}));

const InfoModal = ({ heading, open, setOpen, setScrollLock, children }) => {
  const classes = useStyles();

  const modalClose = () => {
    setOpen(false);
    setScrollLock(false);
  };

  const modalbody = (
    <div className={classes.paper}>
      <CloseIcon className={classes.closeicon} onClick={() => modalClose()} />

      <div id="simple-modal-description">
        <div className={classes.modalbuttongroup}>{children}</div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={() => modalClose()}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalbody}
      </Modal>
    </div>
  );
};

export default InfoModal;
