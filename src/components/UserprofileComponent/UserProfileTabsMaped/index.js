import React, { useState } from "react";
import { makeStyles, Tab, Tabs } from "@material-ui/core";
import Userprofiletabs from "../Userprofiletabs";
import { a11yProps, TabPanel } from "./TabUnits";
import { StyledTab, StyledTabs } from "../../Tabs";
import UserProfileCardmaped from "../Userprofilecardmap";

const UserprofiletabsMaped = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  let values = [
    "On Sale", // "Owned",

    "Created",
    "following",
    "liked",
    "activity",
  ];

  const handleChange = (event, value) => {
    setValue(value);
  };
  return (
    <>
      <div className={classes.root}>
        <StyledTabs textColor="secondary" value={value} onChange={handleChange}>
          {values.map((item, index) => (
            <StyledTab label={item} {...a11yProps(index)} />
          ))}
        </StyledTabs>
      </div>
      <div>
        <TabPanel value={value} index={0}>
          <UserProfileCardmaped />
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
        <TabPanel value={value} index={2}></TabPanel>
        <TabPanel value={value} index={3}></TabPanel>{" "}
        <TabPanel value={value} index={4}></TabPanel>
      </div>
    </>
  );
};
export default UserprofiletabsMaped;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    "& .MuiTabs-scrollButtons": {
      color: theme.palette.secondary.m,
    },
  },
}));
