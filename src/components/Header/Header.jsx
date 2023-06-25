import {
  faMagnifyingGlass,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <img width="80px" className="py-3" src="/logo.svg" alt="" />
        <div>
          <Link to="/" className="mr-6">
            Home
          </Link>
          <Link to="/about" className="mr-6">
            About
          </Link>
          <Link to="/services" className="mr-6">
            Services
          </Link>
          <Link to="/blog" className="mr-6">
            Blog
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
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
