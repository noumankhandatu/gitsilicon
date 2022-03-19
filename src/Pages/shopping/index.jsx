import { Box, Typography } from "@material-ui/core";
import React from "react";
import ShoppingCard from "../../components/ShoppingCard";
import { useStyles } from "./style";
const Shopping = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainContainer}>
        <Box pt={10}>
          <Typography className="typo" variant="h2">
            Shop with Crypto
          </Typography>
          <ShoppingCard />
        </Box>
      </Box>
    </>
  );
};

export default Shopping;
