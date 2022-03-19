import React from "react";
import CreateBtn from "../../Buttons/CreateButton";
import { Box, Divider, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const FilterSection = () => {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" justifyContent="space-between" mr={10}>
        <Box className={classes.Filtertext}>
          <Typography variant="h4">Filter</Typography>
          <Typography variant="subtitle2">(251 results)</Typography>
        </Box>
        <Box>
          <CreateBtn text="Price" size="large" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mr={2}>
        <Divider
          light
          orientation="horizontal"
          width="88%"
          style={{ backgroundColor: "#4A0386" }}
        />
      </Box>
    </div>
  );
};

export default FilterSection;

const useStyles = makeStyles((theme) => ({
  Filtertext: {
    marginLeft: "80px",
    color: theme.palette.text.primary,
    display: "flex",
    maxWidth: 175,
    alignItems: "baseline",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      marginRight: "120px",
      marginLeft: "20px",
    },
  },
}));
