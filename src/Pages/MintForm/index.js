import React, { useEffect, useReducer, useState } from "react";
import formimg from "../../assets/image/fig.png";
import { Box, Checkbox, Divider, Typography } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { TextField } from "@material-ui/core";
import CreateBtn from "../../components/Buttons/CreateButton";
import { makeStyles } from "@material-ui/core";
import TermAndConditions from "../../components/termsAndCondition";
import PreviewButton from "../../components/Buttons/PreviewButton";
import { useWindowSize } from "../../Utilities/hooks";
import {
  ItemDetailForm,
  PreviewImage,
  UploadImage,
} from "../../components/MintformUnits";
import Switches from "../../components/Switches";
import reducer, { initialSwitchesState, toggleSwitch, TYPES } from "./reducer";

const MintFormPage = () => {
  const [model, setModel] = useState(false);
  const [disab, setDisable] = useState(true);

  const [
    { toggleRent, toggleAuction, togglePutOnSale, toggleFixedPrice },
    dispatch,
  ] = useReducer(reducer, initialSwitchesState);

  // const [toggleRent, setToggleRent] = useState(false);
  // const [toggleAuction, setToggleAuction] = useState(false);
  // const [togglePutOnSale, setTogglePutOnSale] = useState(true);
  // const [toggleFixedPrice, setToggleFixedPrice] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [Preview, setPreview] = useState(true);
  const classes = useStyles();

  const windowSize = useWindowSize();

  const handlePreview = () => {
    setPreview(true);
  };

  const ToggleModel = (e) => {
    setModel(e.target.checked);
    setTermsCheck(e.target.checked);
  };
  const closeModel = () => {
    setModel(false);
  };
  const AcceptTerms = () => {
    setDisable(false);
  };

  const handleTogglerRent = (e) => {
    toggleSwitch(TYPES.TOGGLE_PUT_ON_RENT, dispatch);
  };
  const handleTogglerAuction = (e) => {
    toggleSwitch(TYPES.TOGGLE_PUT_ON_AUCATION, dispatch);
  };
  const handleTogglerFixedPrice = (e) => {
    toggleSwitch(TYPES.TOGGLE_PUT_ON_FIX_PRICE, dispatch);
  };
  const handlePutOnSale = (e) => {
    toggleSwitch(TYPES.TOGGLE_PUT_ON_SELL, dispatch);
  };
  useEffect(() => {
    if (windowSize.width >= 600) {
      setPreview(true);
    } else {
      setPreview(false);
    }
  }, [windowSize.width]);
  return (
    <Box className={classes.layout}>
      <Box>
        <Box pb={3}></Box>
        <Box>
          <Typography className={classes.whitecolor} variant="h2">
            <b>Create Collectible</b>
          </Typography>
        </Box>
        <Box>
          <UploadImage />
        </Box>
        <Box>
          <ItemDetailForm />
        </Box>
        <Box mt={7}>
          <Divider style={{ backgroundColor: "#6605B8" }} />
        </Box>
        {/* Switches */}
        <Box className={classes.switcherBox} mt={10}>
          <Switches
            label="Put on sale"
            checked={togglePutOnSale}
            onChange={handlePutOnSale}
          />
        </Box>
        {togglePutOnSale && (
          <>
            <Box mt={5}>
              <Switches
                label="Rent"
                checked={toggleRent}
                onChange={handleTogglerRent}
              />
            </Box>
            {toggleRent && (
              <Box pt={2} className={classes.textFields_Boxes}>
                <TextField
                  className={classes.textFields}
                  id="outlined-secondary"
                  placeholder="Rent Price"
                  variant="outlined"
                />
                <TextField
                  className={classes.textFields}
                  id="outlined-secondary"
                  placeholder="Rent Date"
                  variant="outlined"
                />
              </Box>
            )}
            <Box className={classes.switcherBox} mt={5}>
              <Switches
                label="Auction"
                checked={toggleAuction}
                onChange={handleTogglerAuction}
              />
              {toggleAuction && (
                <Box pt={2} className={classes.textFields_Boxes}>
                  <TextField
                    className={classes.textFields}
                    id="outlined-secondary"
                    placeholder="Starting Bit"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textFields}
                    id="outlined-secondary"
                    placeholder="End Time"
                    variant="outlined"
                  />
                </Box>
              )}
            </Box>
            <Box className={classes.switcherBox} mt={5}>
              <Switches
                label="Fixed Price"
                checked={toggleFixedPrice}
                onChange={handleTogglerFixedPrice}
              />
            </Box>
            {toggleFixedPrice && (
              <Box>
                <TextField
                  className={classes.textFields}
                  id="outlined-secondary"
                  placeholder="e.g 10ETH"
                  variant="outlined"
                />
              </Box>
            )}
          </>
        )}
        <Box mt={20}>
          <Checkbox
            checked={termsCheck}
            inputProps={{ "aria-label": "primary checkbox" }}
            onChange={ToggleModel}
          />
          <Typography className={classes.textColor} variant="">
            <b>I agree with the term and conditions.</b>
          </Typography>
        </Box>
        <Box mt={5}>
          <PreviewButton text="Preview" onClick={handlePreview} />
          <CreateBtn
            text=" Create item"
            endIcon={<ArrowRightAltIcon />}
            disabled={!termsCheck}
          />

          {model && (
            <TermAndConditions
              handleToggle={closeModel}
              handleTerms={AcceptTerms}
            />
          )}
        </Box>
        {/* Switches End */}
      </Box>

      {/* Image */}

      {Preview && <PreviewImage src={formimg} />}
    </Box>
  );
};

export default MintFormPage;
const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.text.secondary,
  },
  layout: {
    padding: "100px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.main,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    gridGap: "200px",
    [theme.breakpoints.down("md")]: {
      display: "flex ",
      flexDirection: "column-reverse",
      padding: "50px",
      gridGap: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px",
      gridGap: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px",
      gridGap: "70px",
    },
    "& .MuiButton-contained.Mui-disabled": {
      backgroundColor: "rgb(102 5 184 / 70%)",
      color: "rgb(255 255 255 / 70%)",
    },
  },

  whitecolor: {
    color: theme.palette.text.primary,
  },

  textFields: {
    border: "1px solid #6703BD",
    borderRadius: "5px",
    color: theme.palette.text.main,
    width: "40%",
  },
  textFields_Boxes: {
    display: "flex",
    gap: 10,
  },

  Icon: {
    width: 15,
    height: 15,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
}));
