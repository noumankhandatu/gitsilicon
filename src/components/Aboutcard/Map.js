import { Box, makeStyles, Typography } from "@material-ui/core";
import Card from "./index";
import Data from "./Data";

function Map() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.textbox}>
        <Typography className={classes.team}>Team</Typography>

        <Box className={classes.main}>
          {Data.map((val, i) => {
            return (
              <Card
                key={i}
                image={val.image}
                name={val.name}
                designation={val.designation}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Map;
export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "50px",

    display: "grid",
    justifyItems: "center ! important",

    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridGap: "20px",
      gridTemplateColumns: "1fr 1fr ",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr ",
      gridGap: "50px",
    },
  },
  textbox: {
    background: theme.palette.background.banner,
  },
  team: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "73.54px",
    textTransform: "capitalize",
    fontFamily: theme.fontFamily,
    color: theme.palette.text.main,
  },
}));
