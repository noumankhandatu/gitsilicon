import BuyPageSection from "../../components/BuyPageSection";
import BuyPageBidTimer from "../../components/BuyPageBidTimer/Index";
import NftRequest from "../../components/NftRentBuy/Index";
import defaultImage from "../../assets/BuyPage/Rectangle 62.png";

const BuyPage = () => {
  return (
    <BuyPageSection
      nftImage={defaultImage}
      button="Buy"
      timer={<NftRequest Title="Price" />}
    />
  );
};
export default BuyPage;
