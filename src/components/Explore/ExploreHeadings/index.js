import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const HeadingSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.colorText}>
      <Box className={classes.ExploreLinks}>
        <Typography variant="body1" className={classes.ExploreItems}>
          Trending
        </Typography>

        <Typography variant="body1" className={classes.ExploreItems}>
          Art
        </Typography>

        <Typography variant="body1" className={classes.ExploreItems}>
          Top
        </Typography>

        <Typography variant="body1" className={classes.ExploreItems}>
          Music
        </Typography>

        <Box>
          <Typography variant="body1" className={classes.ExploreItems}>
            Domains
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" className={classes.ExploreItems}>
            Trading Cards
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" className={classes.ExploreItems}>
            Collectables
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h1" className={classes.Exploreheading}>
          Explore
        </Typography>
      </Box>
    </div>
  );
};
export default HeadingSection;
const useStyles = makeStyles((theme) => ({
  colorText: {},
  ExploreLinks: {
    height: 53,
    alignItems: "center",
    display: "grid",
    padding: "0px  50px",
    textAlign: "center",
    gridTemplateColumns: "repeat(7 ,1fr)",
    backgroundColor: theme.palette.background.banner,

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(7 ,1fr)",
      padding: 5,
    },
  },
  ExploreItems: {
    color: theme.palette.text.primary,
    fontWeight: "600 ! important",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      fontSize: 8,
    },
  },
  Exploreheading: {
    margin: 30,
    color: theme.palette.text.primary,
    fontWeight: "600 ! important",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontWeight: 800,
      fontSize: 34,
    },
  },
}));
