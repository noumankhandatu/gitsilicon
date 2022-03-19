import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={4} variant="outlined" shape="rounded" />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",

    "& > *": {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary,
    },
    "& .MuiButtonBase-root:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.text.primary,
    },
  },
}));
