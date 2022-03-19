import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  fileBox: {
    border: "1px solid #6605B8",
    height: "150px",
    width: "100%",
  },
  previewContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  whitecolor: {
    color: theme.palette.text.primary,
  },
  previo: {
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      letterSpacing: "4px",
    },
  },
  image: {
    borderRadius: "5%",
  },
  textColor: {
    color: theme.palette.text.secondary,
  },
}));
