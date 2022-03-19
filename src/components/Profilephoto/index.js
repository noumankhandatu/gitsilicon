import React from "react";
import ProfileImage from "../../assets/Profileimages/austin-wade.png";
import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  profilecontainer: {
    display: "flex",
    textAlign: "start",
    marginLeft: "7%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "5%",
    },
  },
  button: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "16px",
    textAlign: "center",
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    border: "2px solid " + theme.palette.text.main,
    borderRadius: "none",
    [theme.breakpoints.down("md")]: {
      margin: "10px 0px 0px 0px",
      borderRadius: "25px",
    },
  },
  ProfilePicture: {
    borderRadius: "50%",
    color: theme.palette.text.primary,
    border: "3px solid " + theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
    },
  },
  Profilelines: {
    display: "grid",
    padding: "0 32px",
    "& .typo": {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 12px",
    },
  },
  profiledetails: {
    width: "280px",
    fontSize: "15px",
    lineHeight: "12px",
    fontWeight: "normal",
    "& .typo": {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.profilecontainer}>
      <div>
        <img className={classes.ProfilePicture} src={ProfileImage} alt="/" />
      </div>
      <div className={classes.Profilelines}>
        <Typography className="typo">Profile Photo</Typography>
        <Box className={classes.profiledetails}>
          <Typography className="typo">
            We recommend an image of at least 400x400. Gifs work too 🙌{" "}
          </Typography>
        </Box>

        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="UPLOAD"
            type="file"
          />

          <Button
            className={classes.button}
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
          >
            UPLOAD
          </Button>
        </label>
      </div>
    </div>
  );
};

export default Profile;
