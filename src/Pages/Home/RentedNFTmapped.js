import React from "react";
import { Box } from "@material-ui/core";
import BlackLineCard from "../../components/BlackLineCard";
import { Link } from "react-router-dom";
import useStyles from "./styles";
const RentedNFTmapped = ({ data = [], heading, headingTwo }) => {
  const classes = useStyles();
  return (
    <Box className={classes.bgcoloraa}>
      <Box display="flex" mb={8} style={{ letterSpacing: "2px" }}>
        <h1 className={classes.textColor}>{heading} </h1>
        <h1 className={classes.textColor}> {headingTwo}</h1>
      </Box>
      <Box className={classes.layoutGridaa}>
        {data.map(
          (
            {
              title,
              lable,
              img,
              avatar,
              titletwo,
              labletwo,
              titlethree,
              lablethree,
              titlefour,
              lablefour,
            },
            i
          ) => {
            return (
              <>
                <Link to="/rentnft">
                  <BlackLineCard
                    key={i}
                    title={title}
                    lable={lable}
                    img={img}
                    avatar={avatar}
                    titletwo={titletwo}
                    labletwo={labletwo}
                    titlethree={titlethree}
                    lablethree={lablethree}
                    titlefour={titlefour}
                    lablefour={lablefour}
                  />
                </Link>
              </>
            );
          }
        )}
      </Box>
    </Box>
  );
};

export default RentedNFTmapped;
