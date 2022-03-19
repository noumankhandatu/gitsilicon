import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/**
 * @dev simple input component
 * @props placeholder for input
 */
const TextFeildComponent = (props) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        required
        id="outlined-basic"
        className={classes.input}
        placeholder={props.placeholder}
        variant="outlined"
      />
    </div>
  );
};

export default TextFeildComponent;
const useStyles = makeStyles((theme) => ({
  input: {
    border: "2px solid " + theme.palette.text.alpha,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    borderRadius: "5px",
    width: "100%",
  },
}));
