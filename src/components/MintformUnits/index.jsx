import { Box, Typography } from "@material-ui/core";
import React from "react";
import ClearButton from "../Buttons/ClearButton";
import MintFormInput from "../MintInput";
import { useStyles } from "./style";
export const UploadImage = () => {
  const classes = useStyles();
  return (
    <div>
      <Box mt={10}>
        <Typography className={classes.textColor} variant="button">
          <b>Upload file</b>
        </Typography>
        <Typography className={classes.textColor} variant="subtitle2">
          <b>
            <small>Drag or choose your file to upload</small>
          </b>
        </Typography>
      </Box>
      <Box
        mt={5}
        mb={4}
        className={classes.fileBox}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box ml={1}>
          <input style={{ color: "#6605B8" }} type="file" multiple />
        </Box>
      </Box>
    </div>
  );
};
export const ItemDetailForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Box mt={10}>
        <Typography className={classes.textColor} variant="button">
          <b>Item Details</b>
        </Typography>
      </Box>
      <Box mt={7}>
        <Box mb={3}>
          <Typography className={classes.textColor} variant="subtitle2">
            <b>
              <small>Item name</small>
            </b>
          </Typography>
        </Box>
        <MintFormInput placeholder="e. g. Redeemable Bitcoin Card with logo" />
      </Box>
      <Box mt={3}>
        <Box mb={3}>
          <Typography className={classes.textColor} variant="subtitle2">
            <b>
              <small>Description</small>
            </b>
          </Typography>
        </Box>
        <MintFormInput placeholder="e. g. “After purchasing you will able to recived the logo...”" />
      </Box>
      <Box display="flex" gridGap="30px" alignItems="center">
        <Box mt={7}>
          <Box mb={3}>
            <Typography className={classes.textColor} variant="subtitle2">
              <b>
                <small>Royalties</small>
              </b>
            </Typography>
          </Box>
          <MintFormInput placeholder="10%" />
        </Box>
        <Box mt={7}>
          <Box mb={3}>
            <Typography className={classes.textColor} variant="subtitle2">
              <b>
                <small>Quantity</small>
              </b>
            </Typography>
          </Box>
          <MintFormInput placeholder="e. g.  limit is one" />
        </Box>
      </Box>
    </div>
  );
};

export const PreviewImage = ({ src }) => {
  const classes = useStyles();
  return (
    <Box pt={8} className={classes.previewContainer}>
      <Typography className={classes.whitecolor} variant="h6">
        <b className={classes.previo}>Preview</b>
      </Typography>
      <Box mt={4} mb={4}>
        <img className={classes.image} src={src} alt="" />
      </Box>
      <Box>
        <ClearButton />
      </Box>
    </Box>
  );
};
