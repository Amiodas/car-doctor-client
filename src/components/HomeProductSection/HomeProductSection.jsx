import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeProductSection = () => {
  const items = [];
  const item = (
    <div className="card w-96 shadow-xl border px-5 pt-5">
      <figure className="px-10 bg-gray-200">
        <img
          src="/src/assets/images/products/1.png"
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center space-y-2">
        <div className="flex gap-2 text-orange-500">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <h2 className="card-title">Cools Led Light</h2>
        <p className="text-red-600 font-bold">$ 20.00</p>
      </div>
    </div>
  );
  for (let i = 0; i < 6; i++) {
    items.push(item);
  }
  return (
    <div className="my-16">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-orange-600">Popular Products</h3>
        <h2 className="text-3xl">Browse Our Products</h2>
        <div className="flex justify-center pt-3">
          <p className="w-1/2 text-gray-500">{`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">{items}</div>
      <div className="flex justify-center mt-8">
        <button className="btn btn-outline text-orange-600  px-6 py-4 hover:bg-orange-600 hover:border-0">
          More Products
        </button>
      </div>
    </div>
  );
};

export default HomeProductSection;
