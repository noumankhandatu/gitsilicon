import React from "react";
import BuyPageSection from "../../components/BuyPageSection";
import NftRequest from "../../components/NftRentBuy/Index";
import RentPad from "../../assets/BuyPage/Rectangle 63.png";

const RentPage = () => {
  return (
    <BuyPageSection
      nftImage={RentPad}
      button="Rent"
      timer={<NftRequest Title="Rent Price" />}
    />
  );
};
export default RentPage;
