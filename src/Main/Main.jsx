import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <h3>Main</h3>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
