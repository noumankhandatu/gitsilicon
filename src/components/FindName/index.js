import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FindName = () => {
  const classes = useStyles();
  return (
    <Box className={classes.FindName_container}>
      <Typography className={classes.FindName_title} variant="h5">
        Check My Numbers
      </Typography>
      <Typography className={classes.FindName_Sub_title} variant="h3">
        Are you holding on to a winning ticket? Here's an easy way to find out.
      </Typography>
      <TextField
        className={classes.FindName_inputField}
        variant="outlined"
        placeholder="enter"
        color="Secondary"
      />
      <Box>
        <Button className={classes.FindNamebtn} variant="contained">
          Check my name
        </Button>
      </Box>
    </Box>
  );
};
export default FindName;

const useStyles = makeStyles((theme) => ({
  FindName_container: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "285px",
    borderRadius: "3px",
    padding: "20px",
  },
  FindName_inputField: {
    color: theme.palette.primary.secondary,
    backgroundColor: theme.palette.text.alpha,
    border: "none ! important",
    borderRadius: "5px",
    outline: "none",
    marginBottom: "36px",
  },
  FindName_title: {
    fontSize: "24px",
    fontWeight: "700",
    color: theme.palette.text.primary,
    marginBottom: "20px",
  },
  FindName_Sub_title: {
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "28px",
  },
  FindNamebtn: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.text.primary,
    width: "40rem ! important",
    margin: "0",
  },
}));
