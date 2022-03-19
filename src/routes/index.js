import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import RocketFired from "../components/RocketFired/RocketFired";
import ComingSoon from "../Pages/ComingSoon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MintFormPage from "../Pages/MintForm";
import FAQs from "../Pages/FAQs/FAQs";
import RentPage from "../Pages/RentPage";
import ProfilePage from "../Pages/Profile/index";
import Userprofile from "../Pages/Userprofile";
import Explore from "../Pages/Explore";
import BuyPage from "../Pages/BuyPage";
import BidPage from "../Pages/BidPage";
import About from "../Pages/About";
import Shopping from "../Pages/shopping";
import ShippingDetail from "../Pages/ShippingDetail";
import Subscribe from "../Pages/subscribe";
const Routing = () => {
  return (
    <Router>
      <RocketFired />
      <Header />
      <Routes>
        {["/", "/home"].map((path) => (
          <Route exact path={path} element={<Home />} />
        ))}
        <Route exact path="/Explore" element={<Explore />} />
        <Route exact path="/shopping" element={<Shopping />} />
        <Route exact path="/mintformpage" element={<MintFormPage />} />
        <Route exact path="/userprofile" element={<Userprofile />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route exact path="/favorites" element={<BuyPage />} />
        <Route exact path="/rentnft" element={<RentPage />} />
        <Route exact path="/bidpage" element={<BidPage />} />
        <Route exact path="/profilepage" element={<ProfilePage />} />
        <Route exact path="/aboutpage" element={<About />} />
        <Route exact path="/shippingdetail/:id" element={<ShippingDetail />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        <Route exact path="*" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
