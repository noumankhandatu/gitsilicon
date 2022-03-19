import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import cn from "classnames";

const useStyles = makeStyles((theme) => ({
  signup: {
    backgroundColor: theme.palette.background.btnWhite,
    color: theme.palette.text.alpha,
    textTransform: "capitalize ! important",
    fontWeight: "600",
    padding: "8px 17px",
  },
}));
const SignUpBtn = (props) => {
  const classes = useStyles();
  const { className, size, text } = props;
  return (
    <div>
      <Button
        size={size}
        className={cn(classes.signup, className)}
        variant="contained"
        color="action"
      >
        {text}
      </Button>
    </div>
  );
};

export default SignUpBtn;
