import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  headerLayout: {
    backgroundColor: theme.palette.background.headerbg,
    display: "flex",
    alignItems: "center",
    padding: "10px",
    paddingRight: "40px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "70px",
    },
  },
  logo: {
    width: "70px",
    display: "flex",
    alignItems: "center",
    zIndex: "1000",
  },
  HeaderLinks: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    fontWeight: "400",
    fontFamily: theme.typography.main,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  hrLine: {
    height: "30px",
    border: "none",
    width: "2px",
    backgroundColor: theme.palette.text.alpha,
  },
  HeaderItems: {
    cursor: "pointer",
    color: "white",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
