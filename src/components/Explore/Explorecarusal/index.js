import React from "react";
import Slider from "../../MultiItemSlider/Slider";
import { Box, Typography } from "@material-ui/core";
import SignUpBtn from "../../Buttons/SignButton";
import { makeStyles } from "@material-ui/core/styles";
const ExploreCarusalSec = () => {
  const classes = useStyles();

  return (
    <div className={classes.textColor}>
      <Box ml={6}>
        <Box mt={6}>
          <Typography variant="h2" className={classes.sliderContent}>
            Featured
          </Typography>
          <Typography variant="h4">Artwork </Typography>
        </Box>
        <Box mt={5}>
          <SignUpBtn text="learn more" />
        </Box>
      </Box>
      <Slider />
    </div>
  );
};

export default ExploreCarusalSec;

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.text.primary,
    display: "grid",
    gridTemplateColumns: "0.5fr  1fr",
    backgroundColor: theme.palette.background.carusalBackground,
    padding: "56px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "  1fr",
      padding: 0,
    },
  },
  sliderContent: {
    fontSize: "45px !important ",
    color: theme.palette.text.primary,
  },
}));
