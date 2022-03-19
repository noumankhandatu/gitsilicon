import { Box, makeStyles, Typography } from "@material-ui/core";
import CreateBtn from "../../components/Buttons/CreateButton";
import SignUpBtn from "../../components/Buttons/SignButton";
import { Link } from "react-router-dom";
export const BannerButtons = (props) => {
  const classes = useStyles();
  return (
    <div {...props}>
      <Typography className={classes.marketPlaceText} variant="h6">
        The easiest and most secure NFT marketplace
      </Typography>
      <Box mt={7} className={classes.twinbutonwidht}>
        <SignUpBtn
          size="large"
          width="500px"
          text=" EXPLORE"
          className={classes.homeButton}
        />
        <Link to="/mintformpage">
          <CreateBtn
            size="large"
            text="MINT"
            className={classes.homeButtontt}
          />
        </Link>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  homeButton: {
    width: 161,
  },
  homeButtontt: {
    width: 161,
    backgroundColor: theme.palette.background.btnPurple,
    color: theme.palette.text.primary,
  },
  twinbutonwidht: {
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "block",
      justifyContent: "space-evenly",
      paddingBottom: "30px",
    },
  },
  marketPlaceText: {
    color: theme.palette.text.main,
    paddingLeft: 6,
  },
}));
