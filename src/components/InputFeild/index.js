import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  LayoutInput: {
    backgroundColor: theme.palette.background.main,
    border: "2px solid " + theme.palette.text.primary,
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  inputFeild: {
    width: "250px",
    padding: "25px",
    border: "none",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.main,
    height: "32px",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
  },

  btnInput: {
    color: theme.palette.text.alpha,
    textTransform: "capitalize",
    backgroundColor: theme.palette.background.btnWhite,
    "&:hover": {
      color: theme.palette.text.primary,
    },
    inputFeild: {
      color: theme.palette.text.alpha,
    },
  },
}));

const InputField = () => {
  const classes = useStyles();
  return (
    <div className={classes.LayoutInput}>
      <input
        type="text"
        placeholder="Your Email"
        className={classes.inputFeild}
      />
      <Button variant="contained" className={classes.btnInput} color="primary">
        Subscribe
      </Button>
    </div>
  );
};

export default InputField;
