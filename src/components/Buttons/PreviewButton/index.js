import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  createbtn: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.primary.main,
    fontWeight: "600",

    textTransform: "capitalize",
    borderRadius: 3,
    padding: "8px 17px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("md")]: {
      width: "95%",
      maxWidth: "none",
      height: 50,
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));
const PreviewButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      size={props.size}
      className={classes.createbtn}
      variant="contained"
      color="primary"
      {...props}
    >
      {props.text}
    </Button>
  );
};

export default PreviewButton;
