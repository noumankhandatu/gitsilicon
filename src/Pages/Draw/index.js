import React from "react";
import car from "../../assets/image/car.PNG";
import FindName from "../../components/FindName/index";
import DrawArray from "../../components/AllArrays/DrawArray";
import Drawbanner from "../../components/Draw banner";
import { Box, makeStyles, Typography } from "@material-ui/core";
import bgShade from "../../assets/image/Group61.png";
import RentedNFTmapped from "../Home/RentedNFTmapped";
import TopNFTArray from "../../components/AllArrays/TopNFTArray";
const useStyles = makeStyles((theme) => ({
  Layout: {
    display: "grid",
    gridTemplateColumns: "1fr  1fr",
    gridTemplateRows: "1fr",
    backgroundColor: theme.palette.background.default,
    backgroundSize: "cover",
    padding: "130px",
    backgroundImage: `url(${bgShade})`,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: " 1fr",
      padding: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  LayoutCards: {
    display: "grid",
    gridTemplateColumns: "1fr  1fr",
    gridGap: "40px",
    gridTemplateRows: "1fr",
    backgroundColor: theme.palette.background.default,
    backgroundSize: "cover",
    padding: "130px",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
      padding: "70px",
      justifyItems: "center",
      gridTemplateColumns: " 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px",
    },
  },
  carimage: {
    width: "110%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bigwinText: {
    fontSize: "70px",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  },
  layoutColor: {
    backgroundColor: theme.palette.background.default,
  },
}));
const DrawPage = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.layoutColor}>
        <Box className={classes.Layout}>
          <Box>
            <Typography variant="button">CONTEST FOR YOUR CHANCE TO</Typography>
            <Box mt={5} mb={5}>
              <Typography className={classes.bigwinText}>
                <b>BIG WIN</b>
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2">
                Now is your chance to win a real item when you hold its NFTs.
                Check out the prestige NFTs you can win the real item in our
                prize draws.Will you be our next lucky winner? In SilliconBets
                when you bought draws NFTs you may sell it back or hold it for a
                chance to when it's real item. SilliconBets will collect royalty
                fees from draw NFTs to pay for the real time and give it to the
                winners.
              </Typography>
            </Box>
          </Box>
          <Box>
            <img src={car} className={classes.carimage} alt="" />
          </Box>
        </Box>
        <Box>
          <Box textAlign="center" style={{ color: "white" }}>
            <Box>
              <Typography variant="h6">Try your chance at winning</Typography>
            </Box>
            <Box mt={3} mb={3}>
              <Typography style={{ color: "#6605B8" }} variant="h4">
                CURRENT CONTEST
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                T Participants buy NFTs and lots are drawn to determine the
                winners.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <RentedNFTmapped
            data={TopNFTArray}
            heading="Tesla"
            headingTwo="Cars"
          />
        </Box>
        <Box>
          <Box textAlign="center" style={{ color: "white" }}>
            <Box p={2}>
              <Typography variant="h6">
                Meet the latest winners from your favorite contest
              </Typography>
            </Box>
            <Box pt={3} pb={3}>
              <Typography style={{ color: "#6605B8" }} variant="h4">
                <b> LATEST WINNERS</b>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.LayoutCards}>
          <Box>
            <FindName />
          </Box>
          <Box>
            {DrawArray.map((items, i) => {
              return (
                <Drawbanner
                  key={i}
                  title={items.title}
                  paragraphy={items.paragraphy}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default DrawPage;
