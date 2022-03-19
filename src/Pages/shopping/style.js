import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.background.default,

    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .typo": {
      color: theme.palette.text.primary,
    },
  },
}));
