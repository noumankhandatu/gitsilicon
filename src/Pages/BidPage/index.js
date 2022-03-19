import BuyPageSection from "../../components/BuyPageSection";
import BuyPageBidTimer from "../../components/BuyPageBidTimer/Index";

const BidPage = () => {
  return <BuyPageSection button="Place a bid" timer={<BuyPageBidTimer />} />;
};
export default BidPage;
