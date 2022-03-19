import React from "react";
import FilterNFtExploreArray from "../../AllArrays/FilterNFtExploreArray";
import BlackLineCard from "../../BlackLineCard";
import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import PaginationRounded from "../../Pagination";

const UserProfileCardmaped = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bgColor}>
      <Box className={classes.LayoutGrid}>
        {FilterNFtExploreArray.map((data, i) => {
          return (
            <Link to="/favorites">
              <BlackLineCard
                key={i}
                title={data.title}
                lable={data.lable}
                img={data.img}
                avatar={data.avatar}
                titletwo={data.titletwo}
                labletwo={data.labletwo}
                titlethree={data.titlethree}
                lablethree={data.lablethree}
              />
            </Link>
          );
        })}
      </Box>
      <PaginationRounded />
    </Box>
  );
};

export default UserProfileCardmaped;

const useStyles = makeStyles((theme) => ({
  LayoutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr  1fr 1fr",
    gridGap: "10px",
    gridTemplateRows: "1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr  1fr",
      gridGap: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex ! important",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  bgColor: {
    color: "white",
    padding: "70px",
    paddingTop: 10,
    [theme.breakpoints.down("sm")]: {
      padding: "40px",
    },
  },
}));
