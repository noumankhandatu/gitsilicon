import React from "react";
import avatar from "../../assets/Avatars/avatar1.png";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const SubAvatar = ({ id, img, title, eth }) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Box p={2}>
        <Typography className={classes.textColor}>{id}</Typography>
      </Box>
      <img src={img} alt="" />
      <Box p={2}>
        <Typography>
          <b>
            <small className={classes.textColor}>{title}</small>
          </b>
        </Typography>
        <Typography>
          <small className={classes.textColor}>{eth}</small>
        </Typography>
      </Box>
    </Box>
  );
};

export default SubAvatar;
const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.text.secondary,
  },
}));
