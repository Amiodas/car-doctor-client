import { faCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex justify-between items-center gap-24">
        <div className="">
          <img src="/logo.svg" alt="" />
          <p className="my-4">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="flex gap-3">
            <button className="btn btn-circle">
              <FontAwesomeIcon icon={faCake} />
            </button>
            <button className="btn btn-circle">
              <FontAwesomeIcon icon={faCake} />
            </button>
            <button className="btn btn-circle">
              <FontAwesomeIcon icon={faCake} />
            </button>
            <button className="btn btn-circle">
              <FontAwesomeIcon icon={faCake} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">About</h3>
          <ul className="space-y-3">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">Company</h3>
          <ul className="space-y-3 mb-10">
            <li>Why Car Doctor</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">Support</h3>
          <ul className="space-y-3">
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Accesbility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
