import React from "react";
import { useStyles } from "./style";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import cn from "classnames";
const BlackLineCard = ({
  title,
  img,
  lable,
  titletwo,
  titlethree,
  labletwo,
  avatar,
  lablethree,
  titlefour,
  lablefour,
}) => {
  const classes = useStyles();
  return (
    <Box
      style={{
        backgroundImage: `url(${img})`,
      }}
      mt={8}
      className={classes.card}
    >
      <Box>
        <Box className={cn(classes.textsInsideLeft, "cardText")}>
          {/*Bottom  Left Text */}
          <Typography style={{ color: "white" }} variant="h7">
            <small>
              <b>{title}</b>
            </small>
          </Typography>
          <Typography style={{ color: "white" }} variant="body2">
            <small> {lable}</small>
          </Typography>
        </Box>
        {/*Bottom  Right Text */}
        <Box className={cn(classes.textsInsideRight, "cardText")}>
          <Typography style={{ color: "white" }} variant="h7">
            <small>
              <b>{titletwo}</b>
            </small>
          </Typography>
          <Typography style={{ color: "white" }} variant="body2">
            <small> {labletwo}</small>
          </Typography>
        </Box>
        {/* Top Left Text */}
        <Box className={cn(classes.textsInsideTop, "cardText")}>
          <Box mt={1} mr={1}>
            <img src={avatar} alt="" />
          </Box>
          <Typography style={{ color: "white" }} variant="body2">
            <small> {titlethree}</small>
          </Typography>
          <Typography style={{ color: "white" }} variant="body2">
            <small> {lablethree}</small>
          </Typography>
        </Box>
        {/* Top Right */}
        <Box className={cn(classes.textsInsideTopRight, "cardText")}>
          <Typography style={{ color: "white" }} variant="h7">
            <small> {titlefour} </small>
          </Typography>
          <Typography style={{ color: "white" }} variant="body2">
            <small> {lablefour} </small>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlackLineCard;
