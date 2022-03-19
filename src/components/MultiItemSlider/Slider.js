import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import BlackLineCard from "../BlackLineCard/index";
import BCardArray from "../AllArrays/BCardArray";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Slider = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Carousel
          autoPlaySpeed="5000"
          enableAutoPlay
          disableArrowsOnEnd={false}
          breakPoints={breakPoints}
          infinite={true}
          pagination={false}
        >
          {BCardArray.map((data, i) => (
            <BlackLineCard
              key={i}
              title={data.title}
              img={data.img}
              lable={data.lable}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    width: "100%",
    "& div.rec-carousel-item": {
      "&:focus": {
        outline: "none",
        boxShadow: "inset 0 0 1px 0px #fff",
      },

      "& .bkVSTc": {
        display: "none",
      },
    },
  },
}));
