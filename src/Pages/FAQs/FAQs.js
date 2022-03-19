import { Box, Typography } from "@material-ui/core";
import React from "react";
import Mapaccordion from "../../components/FAQs/Mapaccordion";
import { makeStyles } from "@material-ui/core";
import SubAvatarMapped from "../../components/SubAvatar/SubAvatarMapped";
import RentedNFTmapped from "../Home/RentedNFTmapped";
import TopNFTArray from "../../components/AllArrays/TopNFTArray";

function FAQs() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box className={classes.subtextsection}>
        <Typography variant="h2" className={classes.maintext}>
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box className={classes.mapsection}>
        <Mapaccordion />
      </Box>
      <RentedNFTmapped data={TopNFTArray} heading="Top" headingTwo="NFT" />

      <Box>
        <div className={classes.Layoutac}>
          <Box display="flex" style={{ letterSpacing: "2px" }}>
            <h1>Top </h1>
            <h1 style={{ color: "#6605B8" }}> Sellers</h1>
          </Box>
          <Box mt={8}>
            <SubAvatarMapped />
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default FAQs;

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
  },
  subtextsection: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  maintext: {
    paddingTop: "50px",
    marginBottom: "50px",
    color: theme.palette.text.primary,
    fontSize: "64px",
    lineHeight: " 74px",
    [theme.breakpoints.down("md")]: {
      padding: "45px",
      fontSize: "34px",
    },
  },
  mapsection: {
    width: "80%",
    margin: "auto",
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      fontWeight: "bold",
    },
    "& .MuiTypography-root": {
      color: theme.palette.text.primary,
    },
  },

  Layoutac: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    padding: "100px",
    [theme.breakpoints.down("md")]: {
      padding: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
}));
