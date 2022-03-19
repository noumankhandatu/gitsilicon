import image from "../../assets/explore images/Rectangle 22.png";
import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Map from "../../components/Aboutcard/Map";

function Aboutpage() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.headtext}>
          About Us
        </Typography>

        <Box className={classes.secondsection}>
          <Box className={classes.second}>
            <Box className={classes.bodytext}>
              <Typography variant="p">
                SiliconBets is an online marketplace platform for non-fungible
                token (NFT). SiliconBets is owned by Meta Protocol Technologies
                Inc based in Silicon Valley, California, USA. The company aims
                to provide customers with more secure NFT trading solutions and
                shopping goods and products with cryptocurrency. You can now
                safely buy things you need with crypto and we will ship you with
                partnership with United Postal Service (UPS).
              </Typography>
            </Box>
          </Box>
          <Box className={classes.imagesec}>
            <img src={image} alt="nftImage" className={classes.imageabout} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Map />
      </Box>
    </Box>
  );
}

export default Aboutpage;

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
  },
  headtext: {
    padding: " 50px 0px",
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "73.54px",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  },
  secondsection: {
    display: "grid",
    gridGap: "30px",
    alignContent: "center",
    gridTemplateColumns: "2fr  1fr",
    paddingBottom: "10rem",

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
