import {
  faMagnifyingGlass,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";


const Header = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <img width="80px" className="py-3" src="/logo.svg" alt="" />
        <div className="flex justify-center gap-5">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/services">Services</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-circle">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className="btn btn-circle">
            <FontAwesomeIcon icon={faShoppingBag} />
          </button>
          <button className="btn btn-outline">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
