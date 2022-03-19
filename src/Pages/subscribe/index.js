import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import logo from "../../assets/image/logo.png";
import TextFeildComponent from "../../components/textfeild";
import rot from "../../assets/image/rt.png";
import rotone from "../../assets/image/rtt.png";
import BuyBidRentButton from "../../components/Buttons/BuyBidRentButton/Index";
const Subscribe = () => {
  const classes = useStyles();
  return (
    <div className={classes.outerDiv}>
      <Box textAlign="center">
        <img src={logo} className={classes.image} alt="" />
        <Typography variant="h2" className={classes.color}>
          Comming Soon
        </Typography>
      </Box>
      <div className={classes.pageGrid}>
        <Box>
          <Typography variant="h1" className={classes.color}>
            We are about to see nft comming and become more useful
          </Typography>
          <Box mt={3}>
            <Typography variant="h6" className={classes.color}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              error minus accusantium eum, molestiae maiores quas neque dolorum
              vitae reprehenderit. Ratione, blanditiis magni est omnis explicabo
              earum molestiae natus animi.
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography variant="h6" className={classes.color}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              error minus accusantium eum, molestiae maiores quas neque dolorum
              vitae reprehenderit. Ratione, blanditiis magni est omnis explicabo
              earum molestiae natus animi.
            </Typography>
          </Box>
          {/* input box below */}
          <Box mt={6} className={classes.bgInput}>
            <Box>
              <Box mt={3}>
                <TextFeildComponent placeholder="Your Name" />
              </Box>
              <Box mt={3}>
                <TextFeildComponent placeholder="Your Email" />
              </Box>
              <Box>
                <BuyBidRentButton buttonContant="Subscribe" />
              </Box>
            </Box>
          </Box>
          {/* Banner below */}
        </Box>
        <Box className={classes.posAb}>
          <img src={rotone} className={classes.imagerot} alt="" />
          <img src={rot} className={classes.posrel} alt="image cant found" />
        </Box>
      </div>
      <Box className={classes.bannerGrid}>
        <Box className={classes.RightBorder}>
          <Typography className={classes.color} variant="h5">
            Unlimited
          </Typography>
          <Typography className={classes.color} variant="h6">
            NFt's
          </Typography>
        </Box>
        <Box className={classes.RightBorder}>
          <Typography className={classes.color} variant="h5">
            Unlimited
          </Typography>
          <Typography className={classes.color} variant="h6">
            Creators
          </Typography>
        </Box>
        <Box className={classes.RightBorder}>
          <Typography className={classes.color} variant="h5">
            Unlimited
          </Typography>
          <Typography className={classes.color} variant="h6">
            Buy/Sell
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.color} variant="h5">
            4
          </Typography>
          <Typography className={classes.color} variant="h6">
            Year of Journey
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Subscribe;
const useStyles = makeStyles((theme) => ({
  outerDiv: {
    backgroundColor: theme.palette.background.default,
  },
  color: {
    color: theme.palette.text.primary,
  },
  posAb: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "100%",
    },
  },
  posrel: {
    top: "-30px",
    left: "-100px",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-118px",
      left: "-24px",
    },
  },
  imagerot: {
    [theme.breakpoints.down("md")]: {
      top: "-140px",
      left: "4px",
      width: "100%",
      position: "absolute",
    },
  },
  image: {
    width: "6%",
    [theme.breakpoints.down("md")]: {
      width: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  },
  pageGrid: {
    backgroundColor: theme.palette.background.default,
    display: "grid",
    padding: "100px",
    gridGap: "100px",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      padding: "30px",
    },
  },
  bannerGrid: {
    border: "2px solid " + theme.palette.background.paper,
    borderRadius: "10px",
    textAlign: "center",
    marginLeft: "100px",
    marginRight: "100px",
    padding: "30px",
    display: "grid",
    backgroundColor: theme.palette.background.primary,
    gridTemplateColumns: "1fr  1fr 1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridGap: "30px",
      marginLeft: "30px",
      marginRight: "30px",
      gridTemplateColumns: "1fr ",
    },
  },
  bgInput: {
    backgroundColor: theme.palette.background.default,
  },
  RightBorder: {
    borderRight: "2px solid " + theme.palette.background.paper,
    [theme.breakpoints.down("md")]: {
      border: "none",
    },
  },
}));
