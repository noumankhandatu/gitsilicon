import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import InputField from "../InputFeild/index";
import { Link } from "react-router-dom";
import FooterIcons from "../FooterIcons";
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerend}>
      <Box className={classes.FooterLayout}>
        <Box className={classes.joinCenter}>
          <Box>
            <Typography variant="h4">
              <b>
                JOIN <br /> SiliconBets
              </b>
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography className={classes.footertext}>
              SiliconBets is an in-built platform designed for creators, artists
              and collectors. In just a few taps, you can create, buy, or rent
              out the NFTs.
            </Typography>
          </Box>
          <Box mt={3}>
            <InputField />
          </Box>
        </Box>
        <Box className={classes.alterdisplay}>
          <Box>
            <Typography variant="h4">
              <b>SliconBets</b>
            </Typography>
            <Link to="/Explore" mt={3}>
              <Typography className={classes.HeaderItems}>Browse</Typography>
            </Link>
            <Box mt={3}>
              <Typography className={classes.HeaderItems}>Blog</Typography>
            </Box>
            <Box mt={3}>
              <Typography className={classes.HeaderItems}>
                Patnership
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography className={classes.HeaderItems}>Support</Typography>
            </Box>
            <Box mt={3}>
              <Typography className={classes.HeaderItems}>Jobs</Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="h4">
              <b>People</b>
            </Typography>
            <Box mt={2}>
              <Typography className={classes.HeaderItems}>Blog</Typography>
            </Box>
            <Box mt={3}>
              <Link to="/aboutpage">
                <Typography className={classes.HeaderItems}>About</Typography>
              </Link>
            </Box>
            <Box mt={3}>
              <Typography className={classes.HeaderItems}>Token</Typography>
            </Box>
            <Box mt={3}>
              <Typography className={classes.HeaderItems}>Protocol</Typography>
            </Box>
            <Box mt={3}>
              <Typography className={classes.HeaderItems}>
                Suggested Feature
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Divider
          light
          orientation="horizontal"
          width="70%"
          style={{ backgroundColor: "#4A0386", padding: "1px" }}
        />
      </Box>
      <Box mt={5} textAlign="center">
        <FooterIcons />
      </Box>
      <Box mt={5} className={classes.endTextsFooter}>
        <Box>
          <Typography className={classes.HeaderItems}>
            Terms
            <span className={classes.visible}>......................</span>
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.HeaderItems}>
            © SiliconBets All rights reserved.
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.HeaderItems}>
            Privacy and Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
