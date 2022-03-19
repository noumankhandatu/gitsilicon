import { Box, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import Switcher from "../Switch";

const Switches = (props) => {
  const { label, subtitle } = props;
  const classes = useStyles();
  return (
    <div className={classes.switcherBox}>
      <Box>
        <Typography variant="button" className={classes.text}>
          {label}
        </Typography>
        {subtitle && <Typography variant="subtitle2">{subtitle}</Typography>}
      </Box>
      <Box>
        <Switcher {...props} />
      </Box>
    </div>
  );
};

export default Switches;
const useStyles = makeStyles((theme) => ({
  switcherBox: {
    display: "flex",
    gridGap: "30px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: theme.palette.text.primary,
  },
}));
