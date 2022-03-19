import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { StyledTab, StyledTabs } from "../Tabs";

const BidPageTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Box>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="transparent"
      >
        <StyledTab className={classes.buypage_Tabs} label="bids" />
        <StyledTab label="Detail" />
        <StyledTab label="History" />
      </StyledTabs>
    </Box>
  );
};

export default BidPageTabs;

const useStyles = makeStyles((theme) => ({}));
