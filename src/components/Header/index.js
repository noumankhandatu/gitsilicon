import React, { useContext } from "react";
import makeStyles from "./style";
import logo from "../../assets/image/logo.png";
import HeaderInput from "../HeaderInput";
import CreateBtn from "../Buttons/CreateButton";
import SignUpBtn from "../Buttons/SignButton";
import { Box, Typography } from "@material-ui/core";
import HamBurger from "../HamBurger";
import { Link } from "react-router-dom";
import ThemeContext from "../../theme.provider";
import IOSSwitch from "../Switch";

const Header = () => {
  const classes = makeStyles();
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Box className={classes.headerLayout}>
        <Box ml={8.5}>
          <Link to="/home">
            <img className={classes.logo} src={logo} alt="" />
          </Link>
        </Box>
        <Box mr={5}>
          <HeaderInput />
        </Box>
        <Box className={classes.HeaderLinks}>
          <Link to="/Explore">
            <Box>
              <Typography className={classes.HeaderItems}>Browse</Typography>
            </Box>
          </Link>
          <Link to="/favorites">
            <Box>
              <Typography className={classes.HeaderItems}>Favorites</Typography>
            </Box>
          </Link>
          <Link to="/userprofile">
            <Box>
              <Typography className={classes.HeaderItems}>Profile</Typography>
            </Box>
          </Link>
          <hr className={classes.hrLine} />

          {/* <Box className={classes.toolTip}>
            <Tooltip title="Comming Soon">
              <Typography className={classes.HeaderItems}>Draws</Typography>
            </Tooltip>
          </Box> */}
          <Link to="/shopping">
            <Box>
              <Typography className={classes.HeaderItems}>Shopping</Typography>
            </Box>
          </Link>

          <Link to="/FAQs">
            <Box>
              <Typography className={classes.HeaderItems}>
                How does it works
              </Typography>
            </Box>
          </Link>
          <Link to="/aboutpage">
            <Box>
              <Typography className={classes.HeaderItems}>People</Typography>
            </Box>
          </Link>
          <Box display="flex" alignItems="center">
            <Link to="/mintformpage">
              <CreateBtn text="Create" />
            </Link>
            <SignUpBtn text="Sign In" />
            <IOSSwitch onClick={toggleTheme} />
          </Box>
        </Box>
        <HamBurger />
      </Box>
    </>
  );
};

export default Header;
