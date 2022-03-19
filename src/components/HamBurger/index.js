import React, { useState, useContext } from "react";
import { Box, Link, Typography } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { useNavigate } from "react-router-dom";
import avaimg from "../../assets/Avatars/avatar3.png";
import img from "../../assets/image/logo.png";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core";
import CreateBtn from "../Buttons/CreateButton";
import FooterIcons from "../FooterIcons";
import SignUpBtn from "../Buttons/SignButton";
import ThemeContext from "../../theme.provider";
import IOSSwitch from "../Switch";
const HamBurger = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function handleExplore() {
    navigate("/Explore");
    setOpen(!true);
  }

  function handleFav() {
    navigate("/favorites");
    setOpen(!true);
  }
  function handleProfile() {
    navigate("/userprofile");
    setOpen(!true);
  }
  function handleFAQ() {
    navigate("/FAQs");
    setOpen(!true);
  }
  function handlepeople() {
    navigate("/aboutpage");
    setOpen(!true);
  }
  function handleReg() {
    navigate("/mintformpage");
    setOpen(!true);
  }
  const handleDraw = () => {
    navigate("/draw");
    setOpen(!true);
  };
  return (
    <div className={classes.RealHamburger}>
      <IconButton
        style={{ color: "white" }}
        edge="start"
        fontSize="large"
        aria-lable="open drawer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        className={classes.SwipeDrawer}
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {}}
      >
        <Box className={classes.arrowsection} p={2}>
          <Box>
            <img src={img} alt="" className="image" />
          </Box>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Box pt={1.5}>
              <NotificationsNoneIcon className="Notify" />
            </Box>
            <Box pt={1} ml={4} pr={2}>
              <img src={avaimg} alt="" className={classes.avatarimg} />
            </Box>
            {open ? (
              <CancelIcon
                className={classes.iconCross}
                variant="contained"
                color="white"
                fontSize="large"
                onClick={() => {
                  setOpen(false);
                }}
              />
            ) : (
              <KeyboardArrowLeftIcon
                variant="contained"
                color="primary"
                fontSize="large"
              />
            )}
          </Box>
        </Box>
        <List className={classes.list}>
          <ListItem>
            {/* Put items Here */}
            <Box className={classes.HeaderLinks}>
              <Box onClick={handleExplore}>
                <Typography className={classes.HeaderItems}>Browse</Typography>
              </Box>
              <Box>
                <Typography onClick={handleFav} className={classes.HeaderItems}>
                  Favorites
                </Typography>
              </Box>
              <Box onClick={handleProfile}>
                <Typography className={classes.HeaderItems}>Profile</Typography>
              </Box>

              <Box onClick={handleDraw}>
                <Typography className={classes.HeaderItems}>Draw</Typography>
              </Box>

              <Box onClick={handleFAQ}>
                <Typography className={classes.HeaderItems}>
                  How does it works
                </Typography>
              </Box>
              <Box onClick={handlepeople}>
                <Typography className={classes.HeaderItems}>People</Typography>
              </Box>
              <Box>
                <IOSSwitch onClick={toggleTheme} />
              </Box>
            </Box>
          </ListItem>
          <Divider className={classes.divider} />
          <Box textAlign="center" mt={3} mb={3}>
            <FooterIcons />
          </Box>
          <Box className={classes.endsection}>
            <Box onClick={handleReg}>
              <Typography className={classes.HeaderItems}>
                <SignUpBtn text="Sign in" size="large" />
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.HeaderItems}>
                <CreateBtn text="Create" size="large" />
              </Typography>
            </Box>
          </Box>
        </List>
      </SwipeableDrawer>
    </div>
  );
};
export default HamBurger;
const useStyles = makeStyles((theme) => ({
  HeaderItems: {
    cursor: "pointer",
    backgroundColor: theme.palette.background.default,
    padding: "10px",
    color: theme.palette.text.primary,
  },
  SwipeDrawer: {
    "& .MuiPaper-root": { width: "100%" },
  },
  avatarimg: {
    width: "30px",
    height: "30px",
    borderRadius: 50,
  },
  arrowsection: {
    display: "grid",
    gridTemplateColumns: "1fr  1fr",
    justifyContent: "end",
    backgroundColor: theme.palette.background.default,
    "& .image": {
      width: "80px",
      height: "45px",
    },
    "& .Notify": {
      paddingLeft: "0px",
    },
  },
  list: {
    backgroundColor: theme.palette.background.default,
  },
  HeaderLinks: {
    color: theme.palette.text.primary,
  },
  RealHamburger: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      "& .MuiPaper-root ": {
        width: "100%",
      },
    },
  },
  endsection: {
    display: "flex",
    justifyContent: "space-around",
  },
  divider: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 20px",
    border: " 1px solid " + theme.palette.text.alpha,
  },
}));
