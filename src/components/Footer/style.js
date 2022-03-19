import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerend: {
    backgroundColor: theme.palette.background.default,
  },

  FooterLayout: {
    display: "grid",
    gridTemplateColumns: "1fr  1fr",
    gridTemplateRows: "1fr",
    gridGap: "140px",
    padding: "100px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
      gridGap: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "  1fr",

      padding: "25px",
    },
  },
  alterdisplay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footertext: {
    color: theme.palette.text.primary,
  },
  HeaderItems: {
    cursor: "pointer",
    color: theme.palette.text.primary,
    fontSize: "18px",
    "&:hover": {
      color: theme.palette.hover.main,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  joinCenter: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  endTextsFooter: {
    display: "flex",
    color: theme.palette.primary.main,
    justifyContent: "space-evenly",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      padding: "20px",
      textAlign: "center",
    },
  },

  footerIcons: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderRadius: "5px",
    margin: "4px",
    fontSize: "30px",
  },
  visible: {
    color: "transparent",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
