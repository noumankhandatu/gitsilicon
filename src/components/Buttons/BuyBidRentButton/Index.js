import React from "react";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const BuyBidRentButtons = ({ buttonContant = "Place a bid" }) => {
  const classes = useStyles();
  return (
    <Box>
      <Button variant="outlined" className={classes.BuyBidRent}>
        {buttonContant}{" "}
      </Button>
    </Box>
  );
};

export default BuyBidRentButtons;

const useStyles = makeStyles((theme) => ({
  BuyBidRent: {
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.primary,
    width: "100%",
    height: "40px",
    marginTop: "35.18px",
    marginBottom: "45.32px",
    fontWeight: "500",
    fontSize: "16px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.background.primary,
      color: theme.palette.secondary.main,
    },
  },
}));
