import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import ProfilePhoto from "../../components/Profilephoto";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CreateButton from "../../components/Buttons/CreateButton";
import ClearButton from "../../components/Buttons/ClearButton";
const ProfileSection = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.Profilecontainer}>
        <Box className={classes.headingcontainer}>
          <Typography variant="h1" className={classes.heading}>
            Edit Profile
          </Typography>
          <Box>
            <Typography variant="body" className={classes.paragraph}>
              You can set preferred display name, create your profile bio and
              manage other personal settings.
            </Typography>
          </Box>
        </Box>
        <ProfilePhoto />
        <Box className={classes.infocontainer}>
          <Box>
            <Typography variant="h4">Account Info</Typography>
            <Typography className={classes.inputheadings}>
              DISPLAY NAME
            </Typography>
            <input
              className={classes.inputfields}
              placeholder="Enter your display name"
              type="text"
            />

            <Typography className={classes.inputheadings}>BIO</Typography>
            <textarea
              className={classes.Bio}
              placeholder="About your self in few words"
              type="text"
            />
          </Box>
          <Box>
            <Typography variant="h4">Social</Typography>
            <Typography className={classes.inputheadings}>
              PORTFOLIO OR WEBSITE
            </Typography>
            <input
              className={classes.inputfields}
              placeholder="Enter URL"
              type="text"
            />
            <Typography className={classes.inputheadings}>TWIITER</Typography>
            <input
              className={classes.inputfields}
              placeholder="@twitter username"
              type="text"
            />
            <button className={classes.buttontwo}>
              <AddCircleOutlineIcon className="icon" />
              <Typography className="typo" variant="body1">
                {" "}
                Add more social media account
              </Typography>
            </button>
          </Box>
        </Box>
        <Box className={classes.line}>
          <hr color="#6605B8" width="84%" />
        </Box>
        <Box className={classes.updatebutton}>
          {" "}
          <CreateButton className={classes.button1} text="Update Profile" />
          <Box mt={1.7}>
            <ClearButton />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileSection;
const useStyles = makeStyles((theme) => ({
  Profilecontainer: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    width: "100%",
  },
  headingcontainer: {
    padding: "100px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  heading: {
    color: theme.palette.text.primary,
    paddingRight: 100,
    width: "352px",
    height: "56px",
    fontWeight: "bold",
    fontSize: "48px",
    lineHeight: "56px",
  },
  paragraph: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "12px",
    padding: "20px 0px 0px 0px",
    [theme.breakpoints.down("md")]: {
      color: theme.palette.text.main,
    },
  },
  infocontainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "100px",
    paddingTop: "80px",
    gridGap: "100px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",

      padding: "20px",
    },
  },
  inputheadings: {
    padding: "20px 0 10px 0px",
    color: theme.palette.text.beta,

    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "12px",
  },
  inputfields: {
    background: theme.palette.background.default,
    border: "2px solid #8A00FF ",
    padding: "20px 30px 13px 30px",
    width: "100%",
    color: theme.palette.text.primary,
    borderRadius: "10px",
    gap: "20px",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: "grey",
      background: theme.palette.background.default,
      fontWeight: "bolder",
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  Bio: {
    background: theme.palette.background.default,
    border: "2px solid " + theme.palette.text.beta,
    paddingLeft: "30px",
    height: "5rem",
    width: "100%",
    color: theme.palette.text.primary,
    borderRadius: "10px",
    marginBottom: "10%",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: "grey",
      fontWeight: "bolder",
      fontSize: "14px",
      lineHeight: "24px",
      textAlign: "start",
    },
  },
  buttontwo: {
    display: "flex",
    padding: 6,

    justifyContent: "space-around",
    background: theme.palette.background.default,
    border: "2px solid " + theme.palette.text.beta,
    width: "290px",
    height: "40px",
    borderRadius: "20px",
    marginBottom: "10%",
    marginTop: "5%",
    "& .icon": {
      color: theme.palette.text.primary,
    },
    "& .typo": {
      color: theme.palette.text.primary,
    },
  },
  plus: {
    padding: "0px 4px 0 1px",
    textAlign: "center",
    marginRight: "10px",
    width: "5px",
    height: "5px",
  },
  line: {
    marginLeft: "10%",
  },
  updatebutton: {
    display: "flex",
    gridGap: "40px",
    paddingLeft: "140px",
    marginTop: "5%",
    paddingBottom: "70px",
    maxWidth: "none",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginLeft: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  button1: {
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
      width: "90%",
      hieght: 50,
    },
  },
}));
