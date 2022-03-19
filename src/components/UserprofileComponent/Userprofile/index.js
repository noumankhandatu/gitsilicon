import React from "react";
import { alpha, Box, Divider, makeStyles } from "@material-ui/core";
import image from "../../../assets/image/Rectangle123.png";
import CreateBtn from "../../Buttons/CreateButton";
import UserprofiletabsMaped from "../UserProfileTabsMaped";

import ProfileCard from "../../Profilecomponents/ProfileCard";
import UserProfileCardmaped from "../Userprofilecardmap";

const UserProfileAlldata = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.backgroundColor}>
        <Box className={classes.backgroundImage}>
          <Box className={classes.backgroundButtonContainer}>
            <CreateBtn text="share" />
          </Box>
        </Box>
        <Box className={classes.Arraybuttoncontainer}>
          <Box className={classes.avatarCard}>
            <ProfileCard />
          </Box>
          <Box className={classes.Arraybutton} ml={13} mt={5}>
            <UserprofiletabsMaped />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default UserProfileAlldata;

const useStyles = makeStyles((theme) => ({
  backgroundColor: { background: theme.palette.background.default },
  backgroundImage: {
    position: "relative",
    width: "100%",
    height: "50vh",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      height: "35vh",
    },
  },
  backgroundButtonContainer: {
    display: "flex",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  imageButtons: {
    padding: "0px 13px",
    background: "transparent",
    color: theme.palette.secondary.main,
    fontSize: theme.spacing(1.5),
    textTransform: "initial",
    marginRight: theme.spacing(1),

    height: theme.spacing(4),
    "&:hover": {
      background: alpha(theme.palette.secondary.main, 0.3),
    },
  },

  avatarCard: {
    position: "relative",
    bottom: "10.9rem",
    left: "5rem",
    width: 250,

    [theme.breakpoints.down("sm")]: {
      left: "15rem",
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      left: "2.4em",
    },
  },
  iconStyle: {
    fontSize: "15px ",
  },
  Arraybuttoncontainer: {
    display: "grid",
    gridTemplateColumns: "0.5fr 1fr ",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr  ",
      paddingRight: 25,
    },
  },

  Arraybutton: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 50,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
    },
  },
  divider: {
    marginLeft: 70,
    backgroundColor: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 28,
      width: "84.5%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  cardmaped: {
    [theme.breakpoints.down("xs")]: {
      padding: 15,
    },
  },
}));
