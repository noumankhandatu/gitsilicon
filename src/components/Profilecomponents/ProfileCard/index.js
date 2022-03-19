import React from "react";

import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";
import avatarImage from "../../../assets/BlackLineCardImg/bcardthree.png";
import CreateBtn from "../../Buttons/CreateButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { alpha, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const ProfileCard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Box className={classes.media}>
        <img src={avatarImage} alt="" style={{}} className={classes.image} />
      </Box>
      <MuiCard className={classes.root}>
        <CardActionArea>
          <CardMedia />

          <CardContent className={classes.cardTitleContainer}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.avatarLink}
            >
              0xc4c16a645...b21a
            </Typography>
            <Typography variant="h5" component="h2">
              Enrico Cole
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.avatarLink}
            >
              <Box className={classes.cardLink} mt={1}>
                {" "}
                bio
              </Box>
            </Typography>
            <Divider className={classes.cardDivider} variant="middle" />
            <Box mt={1}>
              <Typography
                variant="body2"
                component="p"
                style={{ textAlign: "start" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque quis venenatis, id varius et justo purus hendrerit
                mi. Sapien nunc, tellus id in sed elementum eget.
              </Typography>
            </Box>

            <Box className={classes.cardButton}>
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
            </Box>
            <Divider className={classes.cardDivider} variant="middle" />
          </CardContent>
        </CardActionArea>
        <Box className={classes.cardButton}>
          <CreateBtn
            onClick={() => navigate("/profilepage")}
            text="edit profile"
          />
          <CreateBtn text="report" />
        </Box>
      </MuiCard>
    </>
  );
};

export default ProfileCard;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    border: "1px solid" + alpha(theme.palette.text.secondary, 0.1),
    borderRadius: 16,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
  },
  media: {
    position: "relative",
    top: 95,
    left: 2,
    margin: "20px 50px",

    zIndex: 1,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      left: 5,
    },
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "100%",
    border: "5px solid white",
  },
  cardTitleContainer: {
    textAlign: "center",
    color: theme.palette.text.main,
    fontFamily: theme.typography.fontFamily,
    marginTop: 108,
  },

  cardLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0px",
  },

  avatarLink: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardDivider: { margin: 0 },
  cardButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "30px 0px",
  },

  primaryBtn: {
    textTransform: "initial",
  },
}));
