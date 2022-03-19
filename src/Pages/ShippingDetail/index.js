import React, { useEffect, useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import TextFeildComponent from "../../components/textfeild";
import CreateBtn from "../../components/Buttons/CreateButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useParams } from "react-router-dom";
const ShippingDetail = () => {
  const params = useParams();
  const [idData, setIdData] = useState([]);
  useEffect(() => {
    fetch(
      `http://testquencies.alshumaal.com/api/RCAs/singleRca.php?id=${params.id}`
    ).then((result) => {
      result.json().then((resp) => {
        setIdData(resp);
      });
    });
  }, []);
  console.log(idData);

  const classes = useStyles();
  return (
    <Box className={classes.grid}>
      <Box className={classes.imageBox}>
        <img
          className={classes.imageSize}
          src={idData.image}
          alt="No data found"
        />
        <div>
          <Typography className={classes.textColor} variant="h5">
            {idData.title}
          </Typography>
          <Typography className={classes.textColor} variant="h3">
            {idData.rcaID}
          </Typography>
          <Typography className={classes.textColor} variant="h3">
            <i>{idData.description}</i>
          </Typography>
        </div>
      </Box>
      <div>
        <div className={classes.inputfeildFlex}>
          <TextFeildComponent placeholder="Enter Full Name" />
          <TextFeildComponent placeholder="Enter Phone Number" />
        </div>
        <Box pt={3} className={classes.inputfeildFlex}>
          <TextFeildComponent placeholder="Enter City Name" />
          <TextFeildComponent placeholder="Enter State Name" />
        </Box>
        <Box pt={3}>
          <TextFeildComponent placeholder="Enter Your Address" />
          <Box pt={3}>
            <TextFeildComponent placeholder="Enter Zip Code" />
          </Box>
        </Box>
        <Box pt={3}>
          <CreateBtn
            endIcon={<ArrowForwardIosIcon />}
            size="large"
            text="Proceed to payment"
          />
        </Box>
      </div>
    </Box>
  );
};

export default ShippingDetail;
const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "100px",
    backgroundColor: theme.palette.background.default,
    display: "grid",
    gap: "100px",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: " 1fr",
      padding: "20px",
      paddingTop: "50px",
    },
  },
  imageSize: {
    width: "100%",
    height: "250px",
  },
  inputfeildFlex: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      gridGap: "30px",
      flexDirection: "column",
    },
  },
  textColor: {
    textAlign: "center",
    color: theme.palette.text.alpha,
  },
  imageBox: {
    borderRadius: "5px",
    border: "2px solid " + theme.palette.text.alpha,
    // border: 2px solid var(--background-primary),
  },
}));
