import React from "react";
import BCardArray from "../AllArrays/BCardArray";
import BlackLineCard from "./index";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  color: {
    color: "red",
  },
}));
const BCardMapped = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardGrid}>
      {BCardArray.map((data, i) => {
        return (
          <BlackLineCard
            key={i}
            title={data.title}
            img={data.img}
            lable={data.lable}
          />
        );
      })}
    </div>
  );
};

export default BCardMapped;
