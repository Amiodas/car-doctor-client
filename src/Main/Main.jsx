import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
