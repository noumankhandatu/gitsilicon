import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SubAvatar from "../../components/SubAvatar/index";
import SubAvatarArray from "../../components/SubAvatar/SubAvatarArray";
import React from "react";

const CreatorCollector = ({ royalty = "21" }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.creator_collector_div}>
        <Box className={classes.creatorDiv}>
          <Typography className={classes.creatorCont}>Creator</Typography>
          <Typography className={classes.creatorRoyalty}>
            {royalty}% royalty
          </Typography>
        </Box>
        <Box className={classes.collectorDiv}>
          <Typography className={classes.creatorCont}>Collection</Typography>
        </Box>
      </Box>
      <Box className={classes.CreatorSubAvatar}>
        <SubAvatar
          id={null}
          img={SubAvatarArray[1].img}
          title={SubAvatarArray[1].title}
        />
        <SubAvatar
          img={SubAvatarArray[1].img}
          title={SubAvatarArray[1].title}
        />
      </Box>
    </>
  );
};

export default CreatorCollector;

const useStyles = makeStyles((theme) => ({
  creator_collector_div: {
    display: "grid",

    gridTemplateColumns: "1fr  1fr",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      gap: "26px",
    },
  },
  creatorDiv: {
    display: "flex",
    gap: "12.02px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
    },
  },
  creatorCont: {
    fontWeight: "500",
    fontSize: "18px",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  creatorRoyalty: {
    color: theme.palette.text.primary,
    fontSize: "14px",
    fontWeight: "500",
    opacity: "80%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  CreatorSubAvatar: {
    display: "grid",
    gridTemplateColumns: "1fr  1fr",
  },
}));
