import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
const useStyles = makeStyles((theme) => ({
  rocket: {
    position: "fixed",
    right: "2rem",
    borderRadius: "100%",
    border: "2px solid #6605B8",
    boxShadow: "2px 4px 8px #3E1B64",

    backgroundColor: theme.palette.text.primary,
    fontSize: "35px",
    bottom: "2rem",
  },
}));
const RocketFired = () => {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const iconRef = useRef(null);
  useEffect(() => {
    if (iconRef.current)
      if (offset >= 1000) iconRef.current.style.display = "block";
      else if (offset <= 1000) iconRef.current.style.display = "none";
  }, [offset]);

  return (
    <div>
      <a href="#top">
        <ArrowUpwardIcon
          ref={iconRef}
          className={classes.rocket}
          variant="contained"
          color="primary"
        />
      </a>
    </div>
  );
};

export default RocketFired;
