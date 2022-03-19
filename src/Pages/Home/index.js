import React from "react";
import TopNFTArray from "../../components/AllArrays/TopNFTArray";
import RecentNFTArray from "../../components/AllArrays/RecentNFTArray";
import Slider from "../../components/MultiItemSlider/Slider";
import CreateBtn from "../../components/Buttons/CreateButton/index";

import world from "../../assets/homeimage/world.gif";
import SubAvatarMapped from "../../components/SubAvatar/SubAvatarMapped";
import nft1 from "../../assets/NFTimages/86D3483D-07FF-4D3D-A01D-6125E7119CF2.jpeg";
import nft2 from "../../assets/NFTimages/mandy-jurgens-hiijoll-recojvered.jpg";
import nft3 from "../../assets/NFTimages/zsmith-creative-render-01.jpg";
import RentedNFTmapped from "./RentedNFTmapped";

import { Box, makeStyles, Typography } from "@material-ui/core";
import { BannerButtons } from "./bannerUnit";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.WSlayout}>
        <Box>
          <Box mb={5} mt={2} ml={1} mr={1}>
            <Typography className={classes.textColor} variant="h2">
              <h4>WELCOME TO THE</h4>
              <Box mt={2}>SiliconBets</Box>
            </Typography>
          </Box>
          <BannerButtons className={classes.bannerUnitTop} />
        </Box>
        <Box>
          <img className={classes.Image} src={world} alt="" />
        </Box>
        <BannerButtons className={classes.bannerUnitBottom} />
      </Box>
      <Box className={classes.OuterLayout}>
        <Box className={classes.Layout}>
          <Box>
            <Typography variant="h5" className={classes.textColor}>
              <b>Pioneering art market royalties</b>
            </Typography>
            <Box mt={3}>
              <Typography className={classes.textColor}>
                Artists receive continuous royalties for all secondary sales on
                their artworks – forever
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography className={classes.textColor} variant="h5">
              <b>Built for longevity</b>
            </Typography>
            <Box mt={4}>
              <Typography className={classes.textColor}>
                All transactions happen on-chain, creating a tamper-proof record
                of each artwork’s history
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography className={classes.textColor} variant="h5">
              <b>The future of art collecting</b>
            </Typography>
            <Box mt={3}>
              <Typography className={classes.textColor}>
                Browse and build your collection of the world’s most
                cutting-edge digital art
              </Typography>
            </Box>
          </Box>
          <Box>
            <CreateBtn text="Load More" size="medium" />
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" className={classes.Layoutaa}>
        <Typography className={classes.textColor} variant="h2">
          <b> Recently added</b>
        </Typography>
        <Box pt={5} pb={5}>
          <Slider />
        </Box>
      </Box>
      <div className={classes.Layoutab}>
        <Box display="flex" style={{ letterSpacing: "2px" }}>
          <h1 className={classes.textColor}>Top Collection</h1>
        </Box>
        <Box mt={8}>
          <SubAvatarMapped />
        </Box>
      </div>
      <RentedNFTmapped data={TopNFTArray} heading="Top" headingTwo="NFT" />

      <div className={classes.Layoutac}>
        <Box display="flex" style={{ letterSpacing: "2px" }}>
          <h1 className={classes.textColor}>Top Sellers </h1>
        </Box>
        <Box mt={8}>
          <SubAvatarMapped />
        </Box>
      </div>
      <RentedNFTmapped
        data={RecentNFTArray}
        heading="Rented"
        headingTwo="Nfts"
      />
      <div className={classes.NftGridaz}>
        <div className={classes.NftGridazcontent}>
          <Typography style={{ fontWeight: 600 }} variant="h4">
            The easiest and most secure NFT marketplace
          </Typography>
          <Typography className={classes.textColor}>
            SliconBets is the premier marketplace for NFT's, which are digital
            items you can truly own. Digital Items have existed for a long time,
            but never like this.
          </Typography>
        </div>
        <div className={classes.NftImgabcGrid}>
          <Box>
            <img className={classes.NftImgabc} src={nft2} alt="" />
          </Box>
          <Box>
            <Box>
              <img className={classes.NftImgabc2} src={nft1} alt="" />
            </Box>
            <Box className={classes.NftImgabcContainer}>
              <img className={classes.NftImgabc3} src={nft3} alt="" />
            </Box>
          </Box>
        </div>
      </div>
      <div className={classes.Layoutaq}>
        <Box>
          <Typography className={classes.textColor} variant="h4">
            What is NFT?
          </Typography>
        </Box>
        <Box mt={5}>
          <Typography
            className={classes.textColor}
            style={{ letterSpacing: "2px" }}
            variant="h6"
          >
            A non-fungible token (NFT) is a unit of data stored on a digital
            ledger, called a blockchain, that certifies a digital asset to be
            unique and therefore not interchangeable.
          </Typography>
        </Box>
      </div>
      <Box className={classes.bannerLayoutabc}>
        <Typography className={classes.textColor}>Google</Typography>
        <Typography className={classes.textColor} variant="h5">
          CoinBase
        </Typography>
        <Typography className={classes.textColor} variant="h5">
          TrustWallet
        </Typography>
        <Typography className={classes.textColor} variant="h4">
          <b> BLOCKCHAIN</b> <br /> CAPITAL
        </Typography>
        <Typography className={classes.textColor} variant="h5">
          FUNDERS FUND
        </Typography>
        <Typography className={classes.textColor} variant="h5">
          Dapper
        </Typography>
      </Box>
    </>
  );
};

export default Home;
const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.text.secondary,
  },

  Layoutab: {
    backgroundColor: theme.palette.background.banner,
    color: theme.palette.text.primary,
    padding: "100px",
    [theme.breakpoints.down("md")]: {
      padding: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },

  Layoutaa: {
    backgroundColor: theme.palette.primary.secondary,
    color: theme.palette.text.primary,
    paddingTop: "50px",
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },
  Layout: {
    backgroundColor: theme.palette.background.banner,
    color: theme.palette.text.primary,
    width: "100%",
    height: "30%",
    justifyContent: "center",

    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 0.5fr",
    gridTemplateRows: "1fr",
    padding: "70px",
    gridGap: "50px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr  1fr ",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr ",
      padding: "30px",
    },
  },
  OuterLayout: {
    backgroundColor: theme.palette.background.banner,
    padding: "40px",
  },
  WSlayout: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: "flex",
    gridGap: "90px",
    justifyContent: "space-around",
    padding: "100px",
    paddingLeft: "140px",
    paddingRight: "100px",
    [theme.breakpoints.down("md")]: {
      display: "block",
      textAlign: "center",
      gridGap: "30px",
      padding: "30px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  bannerUnitTop: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  bannerUnitBottom: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },

  Image: {
    textAlign: "center",
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  Layoutac: {
    backgroundColor: theme.palette.background.banner,
    color: theme.palette.text.primary,
    padding: "100px",
    [theme.breakpoints.down("md")]: {
      padding: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  NftGridaz: {
    backgroundColor: theme.palette.background.gridBanner,
    color: theme.palette.text.main,
    display: "grid",
    fontWeight: "bold ! important",
    gridTemplateColumns: "1fr 1fr",
    background: "rgba(0, 0, 0, 0.29)",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr ",
    },
  },
  NftGridazcontent: {
    padding: "80px 0px 50px 90px",
    [theme.breakpoints.down("xs")]: {
      padding: "80px 40px 10px ",
    },
  },
  NftImgabc: {
    minWidth: "288px",
    height: "282px",
    objectFit: "cover",
    borderRadius: 15,
    filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.2))",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 50,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
  },
  NftImgabcGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 10,
    margin: "30px",
    [theme.breakpoints.down("sm")]: {
      gridGap: 3,
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      gridTemplateColumns: "1fr ",
      marginTop: "10",
      gridGap: 13,
    },
  },
  NftImgabc2: {
    minWidth: "192px",
    height: "182px",
    borderRadius: 15,
    objectFit: "cover",
    filter: "drop-shadow(0px 10px 35px rgba(206, 206, 206, 0.2))",
    [theme.breakpoints.down("xs")]: {
      minWidth: "288px",
      height: "282px",
    },
  },
  NftImgabc3: {
    minWidth: "192px",
    height: "182px",
    borderRadius: 15,
    objectFit: "cover",
    filter: "drop-shadow(0px 10px 35px rgba(0, 0, 0, 0.2))",
    [theme.breakpoints.down("xs")]: {
      minWidth: "288px",
      height: "282px",
    },
  },
  NftImgabcContainer: {
    marginTop: 10,
  },
  bannerLayoutabc: {
    color: theme.palette.text.primary,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "60px",
    backgroundColor: theme.palette.background.alpha,
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridColumnGap: "50px",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  textsizeabc: {
    fontSize: `30px`,
    [theme.breakpoints.down("md")]: {
      fontSize: `20px`,
      letterSpacing: "5px",
      marginTop: "30px",
    },
  },
  Layoutaq: {
    backgroundColor: theme.palette.background.banner,
    color: theme.palette.text.primary,
    textAlign: "center",
    padding: "100px",
    paddingLeft: "20%",
    paddingRight: "20%",
    [theme.breakpoints.down("md")]: {
      padding: "70px",
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
}));
