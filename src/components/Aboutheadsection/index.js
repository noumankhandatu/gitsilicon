import React from "react";
import image from "../../assets/explore images/Rectangle 22.png";
import { Box, makeStyles, Typography } from "@material-ui/core";

export default function Abouthead() {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Typography variant="h2" className={classes.headtext}>
          {" "}
          About Us
        </Typography>
      </Box>
      <Box className={classes.secondsection}>
        <Box className={classes.second}>
          <Box className={classes.bodytext}>
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              odio at tellus egestas ac, tempor vehicula. Aliquet condimentum
              nunc neque, leo eget ornare augue eu mattis. Tempus aliquam urna
              sagittis sapien, suscipit id aliquet. Tellus a tincidunt viverra
              donec malesuada rhoncus sapien. Eget aliquam eleifend posuere eu
              ligula a semper diam. Dolor tristique aliquam dui in. Dictum
              praesent pulvinar felis, quis. Lacus, non ut elit morbi sit
              ullamcorper amet, sit.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.imagesec}>
          <img src={image} alt={"hishs"} className={classes.imageabout} />
        </Box>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  headtext: {
    padding: " 50px 0px",
    textAlign: "center",
    color: theme.palette.secondary.main,
    background: theme.palette.background.default,
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "73.54px",
  },
  secondsection: {
    display: "grid",
    gridGap: "30px",
    alignContent: "center",
    gridTemplateColumns: "2fr  1fr",
    color: theme.palette.secondary.main,
    background: theme.palette.background.default,
    [theme.breakpoints.down("md")]: {
      paddingTop: 20,
      gridTemplateColumns: "1fr",
    },
  },
  second: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  bodytext: {
    maxWidth: "550px",
    fontWeight: 600,
    fontSize: "20px",
    padding: "5px",
    lineHeight: "35px",
    [theme.breakpoints.down("xs")]: {
      margin: 10,
    },
  },
  imageabout: {
    borderRadius: "5px",
    filter: "drop-shadow(0px 7px 25px rgba(102, 5, 184, 0.68))",
  },
  imagesec: {
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      display: "flex",
      justifyContent: "center",
    },
  },
}));
