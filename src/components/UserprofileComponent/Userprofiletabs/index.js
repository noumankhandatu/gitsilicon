import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Userprofiletabs = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button}>{children}</Button>
    </div>
  );
};

export default Userprofiletabs;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.secondaryFontFamily,
      margin: 5,
      textTransform: "none",
      borderRadius: theme.spacing(4),
      transition: "none",
      width: "60px",
      height: 22,
      fontSize: "10px !important",
      [theme.breakpoints.down("xs")]: {
        margin: 0,

        fontSize: "8px !important",
      },
    },
    "& :hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },
}));
