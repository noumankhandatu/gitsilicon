import React from "react";
import { Box, Link, makeStyles } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import RedditIcon from "@material-ui/icons/Reddit";
import GitHubIcon from "@material-ui/icons/GitHub";
import ChildCareTwoToneIcon from "@material-ui/icons/ChildCareTwoTone";
const FooterIcons = () => {
  const classes = useStyles();
  return (
    <div>
      <Link href="https://discord.gg/jznEcRhJ" target="_blank">
        {" "}
        <ChildCareTwoToneIcon className={classes.footerIcons} />
      </Link>
      <YouTubeIcon className={classes.footerIcons} />
      <Link href="https://twitter.com/siliconbets" target="_blank">
        <TwitterIcon className={classes.footerIcons} />
      </Link>
      <Link href="https://m.facebook.com/siliconbets" target="_blank">
        <FacebookIcon className={classes.footerIcons} />
      </Link>
      <InstagramIcon className={classes.footerIcons} />
      <Link href="https://www.reddit.com/user/siliconbets" target="_blank">
        <RedditIcon className={classes.footerIcons} />
      </Link>{" "}
      <i className={classes.footerIcons} class="fab fa-discord fa-9x"></i>
      <LinkedInIcon className={classes.footerIcons} />
    </div>
  );
};

export default FooterIcons;
const useStyles = makeStyles((theme) => ({
  footerIcons: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderRadius: "5px",
    margin: "4px",
    fontSize: "30px",
  },
}));
