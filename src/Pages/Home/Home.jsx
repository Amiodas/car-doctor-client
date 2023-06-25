import React from "react";
import Banner from "../../components/Banner/Banner";
import HomeAboutSection from "../../components/HomeAboutSection/HomeAboutSection";
import HomeServicesSection from "../../components/HomeServicesSection/HomeServicesSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeAboutSection />
      <HomeServicesSection />
    </div>
  );
};

export default Home;
