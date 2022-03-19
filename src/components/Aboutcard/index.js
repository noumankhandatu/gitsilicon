import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
function Cardabout({ image, name, designation }) {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box className={classes.card}>
        <Box className={classes.imagbox}>
          <img className={classes.img} src={image} alt={image} />
        </Box>
        <Box className={classes.textbox}>
          <Typography variant="h4" className={classes.teamname}>
            {name}
          </Typography>
          <Typography variant="p" className={classes.designationname}>
            {designation}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Cardabout;
export const useStyles = makeStyles((theme) => ({
  card: {
    width: "265px",
    height: "305.32px",
    padding: "5px",
    background: "white",
    textAlign: "center",
  },
  img: {
    width: "254.41px",
    height: " 243.03px",
    border: "1px solid #4A0386",
    boxSizing: "border-box",
  },
  imagbox: {
    backgroundColor: "white",
  },
  textbox: {
    padding: 5,
  },
  teamname: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "20px",
  },
  designationname: {
    color: theme.palette.primary.main,
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "20px",
    paddingBottom: "5px",
  },
}));
