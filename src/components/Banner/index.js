import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import logo from "../../assets/image/Rectangle 3.png";
import InputField from "../InputFeild/index";
const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.EntireBanner}>
      <Box className={classes.textBox}>
        <Box>
          <img src={logo} className={classes.logo}  alt=""/>
          {/* <Typography className={classes.SiliconText}>SILLICONBETS</Typography> */}
        </Box>
        <Box mt={10}>
          <Typography className={classes.textComing}>
            We're COMING SOON
          </Typography>
        </Box>
        <Box mt={5}>
          <Typography className={classes.getreadyText}>
            Get ready ! Something really cool is coming !
          </Typography>
        </Box>
        <Box mt={5} display="flex" justifyContent="center">
          <InputField />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
