import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const HeaderInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.LayoutInput}>
      <input
        type="text"
        placeholder=" Search Here ..."
        className={classes.inputFeild}
      />
      <SearchIcon className={classes.colors} />
    </div>
  );
};

export default HeaderInput;
const useStyles = makeStyles((theme) => ({
  colors: { color: theme.palette.text.secondary },
  LayoutInput: {
    display: "flex",
    marginLeft: "40px",
    alignItems: "center",
    backgroundColor: theme.palette.background.primary,
    borderRadius: "5px",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      width: "420px",
      marginLeft: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "196px",
      marginLeft: "0px",
    },
  },
  inputFeild: {
    border: "none",
    color: theme.palette.text.secondary,
    letterSpacing: "1px",
    backgroundColor: theme.palette.background.primary,
    width: "250px",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down("md")]: {
      width: "400px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "152px",
    },
  },

  btnInput: {
    color: theme.palette.text.alpha,
    textTransform: "capitalize",
    backgroundColor: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}));
