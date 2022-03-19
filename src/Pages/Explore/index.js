import React from "react";
import HeadingSection from "../../components/Explore/ExploreHeadings";
import FilterNFtExplore from "../../components/Explore/ExploreCard";
import ExploreCarusalSec from "../../components/Explore/Explorecarusal";
import FilterSection from "../../components/Explore/ExplorefilterSec";
import { makeStyles } from "@material-ui/core/styles";
const Explore = () => {
  const classes = useStyles();

  return (
    <div className={classes.Explore}>
      <div className={classes.flexRev}>
        <div>
          <HeadingSection />
        </div>
        <div>
          <FilterSection />
        </div>
      </div>
      <div>
        <FilterNFtExplore />
      </div>
      <div>
        <ExploreCarusalSec />
      </div>
      <div>
        <FilterNFtExplore />
      </div>
    </div>
  );
};

export default Explore;

const useStyles = makeStyles((theme) => ({
  Explore: {
    background: theme.palette.background.default,
  },
  color: {
    color: theme.palette.text.primary,
    display: "grid",
    gridTemplateColumns: "0.5fr  1fr",
    backgroundColor: theme.palette.primary.contrastText,
    padding: "56px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "  1fr",
    },
  },
  flexRev: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
}));
