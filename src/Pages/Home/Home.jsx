import React from "react";
import Banner from "../../components/Banner/Banner";
import HomeAboutSection from "../../components/HomeAboutSection/HomeAboutSection";
import HomeServicesSection from "../../components/HomeServicesSection/HomeServicesSection";
import HomeContactSection from "../../components/HomeContactSection/HomeContactSection";
// import HomeProductSection from "../../components/HomeProductSection/HomeProductSection";
import HomeTeamSection from "../../components/HomeTeamSection/HomeTeamSection";
import HomeFeatureSection from "../../components/HomeFeatureSection/HomeFeatureSection";
import HomeTestimonialSection from "../../components/HomeTestimonialSection/HomeTestimonialSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeContactSection />
      {/* <HomeProductSection /> */}
      <HomeTeamSection />
      <HomeFeatureSection />
      <HomeTestimonialSection />
    </div>
  );
};

export default Home;
