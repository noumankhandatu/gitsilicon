import React from "react";
import SubAvatar from ".";
import SubAvatarArray from "./SubAvatarArray";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  LayoutGrid: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr  1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: " 1fr 1fr",
    },
  },
}));
const SubAvatarMapped = () => {
  const classes = useStyles();
  return (
    <div className={classes.LayoutGrid}>
      {SubAvatarArray.map((data, i) => {
        return (
          <SubAvatar
            key={i}
            id={data.id}
            img={data.img}
            title={data.title}
            eth={data.eth}
          />
        );
      })}
    </div>
  );
};

export default SubAvatarMapped;
