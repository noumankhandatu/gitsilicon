import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  color: theme.palette.text.secondary,

  bgcoloraa: {
    backgroundColor: theme.palette.background.banner,
    color: theme.palette.text.primary,
    padding: "100px",
    [theme.breakpoints.down("md")]: {
      padding: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "40px",
    },
  },
  layoutGridaa: {
    display: "grid",
    gridTemplateColumns: "1fr  1fr 1fr 1fr",
    justifyItems: "center",
    gridGap: "30px",
    gridTemplateRows: "1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr  1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex ! important",
      flexWrap: "wrap",
      alignItems: "center",
      justifyItems: "center",
      justifyContent: "center",
      gridGap: "30px",
    },
  },
}));
