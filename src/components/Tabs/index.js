import { Tab, Tabs, withStyles } from "@material-ui/core";

export const StyledTabs = withStyles({
  indicator: {
    display: "none",
  },
})(Tabs);

export const StyledTab = withStyles((theme) => ({
  root: {
    "&$selected": {
      color: theme.palette.text.main,
    },
  },
  selected: {
    color: theme.palette.text.main,
  },
}))(Tab);
