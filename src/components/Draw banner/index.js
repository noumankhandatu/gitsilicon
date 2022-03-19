import React from "react";
// import Ellispecircle from "../../assets/image/Ellipsecircle.png";
import Telsa from "../../assets/image/Rectangle147.png";
import { Box, makeStyles, Typography } from "@material-ui/core";
const Drawbanner = ({ title, paragraphy }) => {
  const classes = useStyles();
  return (
    <Box mt={3} className={classes.container}>
      <div className={classes.imagediv}>
        {/* <img classNa me={classes.Ellispecircle} src={Ellispecircle} alt="" /> */}
      </div>
      <div>
        <div className={classes.headingbutton}>
          <h1 className={classes.heading}>{title}</h1>
          <div className={classes.passthrough}>
            <span>0x234...544 </span>
          </div>
        </div>

        <div>
          <span className={classes.winnigcar}>Winning car</span>
          <Typography className={classes.Typography}>
            {paragraphy}
            <Box mt={2} textAlign="right">
              Saturday April 20, 2020
            </Box>
          </Typography>
        </div>
      </div>
      <div className={classes.teslapicture}>
        <img src={Telsa} alt="" />
      </div>
    </Box>
  );
};

export default Drawbanner;

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.main,
    width: "800px",
    height: "251px",
    borderRadius: "5px",
    display: "flex",
    padding: "20px 20px",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "100%",
      height: "70vh",
    },
  },
  passthrough: {
    backgroundColor: theme.palette.text.primary,
    width: "100px",
    height: "17px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    textAlign: "center",
    fontSize: "10px",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "& span": {
      color: theme.palette.background.primary,
    },
  },
  Ellispecircle: {
    width: "84px",
    height: "84px",
  },
  heading: {
    lineHeight: "29px",
    padding: "10px",
    color: theme.palette.text.primary,
    fontWeight: 900,
  },
  Typography: {
    lineHeight: "20px",
    padding: "10px",
  },
  winnigcar: {
    color: theme.palette.text.primary,
    padding: "10px",
  },

  teslapicture: {
    paddingTop: "30px",
  },
  headingbutton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "15px",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  imagediv: {
    paddingLeft: "15px",
  },
}));
