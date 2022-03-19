import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";

const FAQsdAccordions = ({ Question, Answer }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className={classes.summary}
          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.secondaryHeading}>
            {Question}
          </Typography>
        </AccordionSummary>
        <div className={classes.divder}>
          <Divider />
        </div>
        <AccordionDetails>
          <Typography className={classes.anstext}>{Answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQsdAccordions;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiTypography-root ": {
      color: theme.palette.primary.main,
    },
  },
  accordion: { boxShadow: "none !important" },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: " 27px",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },

  summary: {
    "& .MuiSvgIcon-root": {
      color: theme.palette.text.primary,
    },
  },
  anstext: {
    fontFamily: theme.typography.fontFamily,
    fontweight: 500,
    fontSize: "18px",
    lineHeight: " 24px",
    textTransform: " uppercase",

    color: "#6605B8 ! important",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
}));
