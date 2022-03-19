import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

const TermAndConditions = ({ handleToggle, handleTerms }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.innerContainer}>
        <Typography variant="h2" className={classes.text}>
          Terms and Conditions
        </Typography>
        <Typography variant="h5" className={classes.termTitle}>
          Introduction.
        </Typography>
        <Typography variant="p" className={classes.text}>
          Welcome to OpenSea, owned and operated by Ozone Networks, Inc. d/b/a
          OpenSea (“OpenSea,” “we,” “us”, or “our”). These Terms of Service
          (“Terms”) govern your access to and use of the OpenSea website(s), our
          APIs, mobile app (the “App”), and any other software, tools, features,
          or functionalities provided on or in connection with our services;
          including without limitation using our services to view, explore, and
          create NFTs and use our tools, at your own discretion, to connect
          directly with others to purchase, sell, or transfer NFTs on public
          blockchains (collectively, the “Service”). “NFT” in these Terms means
          a non-fungible token or similar digital item implemented on a
          blockchain (such as the Ethereum blockchain), which uses smart
          contracts to link to or otherwise be associated with certain content
          or data. For purposes of these Terms, “user”, “you”, and “your” means
          you as the user of the Service. If you use the Service on behalf of a
          company or other entity then “you” includes you and that entity, and
          you represent and warrant that (a) you are an authorized
          representative of the entity with the authority to bind the entity to
          these Terms, and (b) you agree to these Terms on the entity’s behalf.
          PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT
          INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN SECTION 16
          BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION
          WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES BETWEEN US
          TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN BY A JUDGE
          OR JURY IN COURT. BY CLICKING TO ACCEPT AND/OR USING OUR SERVICE, YOU
          AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED
          HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT
          ACCESS OR USE THE SERVICE. OpenSea is not a wallet provider, exchange,
          broker, financial institution, or creditor. OpenSea provides a
          peer-to-peer web3 service that helps users discover and directly
          interact with each other and NFTs available on public blockchains. We
          do not have custody or control over the NFTs or blockchains you are
          interacting with and we do not execute or effectuate purchases,
          transfers, or sales of NFTs. To use our Service, you must use a
          third-party wallet which allows you to engage in transactions on
          blockchains. OpenSea is not party to any agreement between any users.
          You bear full responsibility for verifying the identity, legitimacy,
          and authenticity of NFTs that you purchase from third-party sellers
          using the Service and we make no claims about the identity,
          legitimacy, functionality, or authenticity of users or NFTs (and any
          content associated with such NFTs) visible on the Service. Because we
          have a growing number of services, we sometimes need to provide
          additional terms for specific services (and such services are deemed
          part of the “Service” hereunder and shall also be subject to these
          Terms). Those additional terms and conditions, which are available
          with the relevant service, then become part of your agreement with us
          if you use those services. In the event of a conflict between these
          Terms and any additional applicable terms we may provide for a
          specific service, such additional terms shall control for that
          specific service. OpenSea reserves the right to change or modify these
          Terms at any time and in our sole discretion. If we make material
          changes to these Terms, we will use reasonable efforts to provide
          notice of such changes, such as by providing notice through the
          Service or updating the “Last Updated” date at the beginning of these
          Terms. By continuing to access or use the Service, you confirm your
          acceptance of the revised Terms and all of the terms incorporated
          therein by reference effective as of the date these Terms are updated.
          It is your sole responsibility to review the Terms from time to time
          to view such changes and to ensure that you understand the terms and
          conditions that apply when you access or use the Service.
        </Typography>
        <Box className={classes.btnContainer}>
          <Button
            className={classes.acceptBtn}
            onClick={() => {
              handleTerms();
              handleToggle();
            }}
          >
            I accept terms and conditions
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TermAndConditions;

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(49, 49, 49, 0.8)",
    zIndex: 999,
    position: "fixed",
    width: "100vw",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  innerContainer: {
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
    width: "960px",
    overFlow: "scroll",
    overflowY: "scroll",
    height: "600px",
    padding: "20px 40px",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      outline: "1px solid #828282",
      borderRadius: "10px",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    "& :hover": {
      backgroundColor: theme.palette.background.primary,
    },
  },
  acceptBtn: {
    width: "300px",
    backgroundColor: theme.palette.background.primary,
  },
  termTitle: {
    marginBottom: "10px",
  },
  text: {
    color: theme.palette.text.secondary,
    marginBottom: "20px",
    lineHeight: "1.5",
  },
}));
