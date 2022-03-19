import { Box, Button } from "@material-ui/core";
import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  btncontainer: {
    display: "flex",
    fontFamily: "DM sans",
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "20px",
  },
  clearallbtn: {
    width: "100px",
    height: "16px",
    fontFamily: "DM sans",
    fontStyle: "normal",
    textTransform: "lowercase",
  },
  buton: {
    fontSize: "large",
    fontWeight: "bold",
    backgroundColor: theme.palette.background.btnPurple,
    color: theme.palette.text.primary,
    textTransform: "capitalize",
  },
}));
const ClearButton = (props) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      style={{ cursor: "pointer" }}
      className={classes.btncontainer}
    >
      <Button
        className={classes.buton}
        startIcon={
          <CancelIcon
            style={{
              backgroundColor: "transparent",
            }}
            variant="contained"
            fontSize="large"
          />
        }
      >
        Clear all
      </Button>
    </Box>
  );
};
export default ClearButton;
