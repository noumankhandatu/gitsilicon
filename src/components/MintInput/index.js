import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  TextFieldstyle: {
    borderRadius: "5px",
    color: "white",
    border: "1px solid #6605B8",
    "& .MuiFormLabel-root": {
      color: theme.palette.text.primary,
    },
  },
  root: {
    "& .MuiTextField-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      color: theme.palette.text.primary,
    },
  },
}));

export default function MintFormInput({ placeholder }) {
  const classes = useStyles();

  return (
    <Box>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-name"
            placeholder={placeholder}
            variant="outlined"
            className={classes.TextFieldstyle}
          />
        </div>
      </form>
    </Box>
  );
}
