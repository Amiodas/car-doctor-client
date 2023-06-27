import React from "react";

const HomeFeatureSection = () => {
  return (
    <div className="my-16">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-orange-600">Core Features</h3>
        <h2 className="text-3xl">Why Choose Us</h2>
        <div className="flex justify-center pt-3">
          <p className="w-1/2 text-gray-500">{`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}</p>
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-3">
        <div className="card border w-48 p-5 hover:bg-orange-500 hover:text-white">
          <figure className="mt-2">
            <img src="/src/assets/icons/group.svg" alt="" />
          </figure>
          <div className="card-body items-center text-center mb-0 py-5">
            <h5 className="text-sm font-bold">Expert Team</h5>
          </div>
        </div>
        <div className="card border w-48 p-5 hover:bg-orange-500 hover:text-white">
          <figure className="mt-2">
            <img src="/src/assets/icons/Group 38729.svg" alt="" />
          </figure>
          <div className="card-body items-center text-center mb-0 py-5">
            <h5 className="text-sm font-bold">Timely Delivery</h5>
          </div>
        </div>
        <div className="card border w-48 p-5 hover:bg-orange-500 hover:text-white">
          <figure className="mt-2">
            <img src="/src/assets/icons/person.svg" alt="" />
          </figure>
          <div className="card-body items-center text-center mb-0 py-5">
            <h5 className="text-sm font-bold">24/7 Support</h5>
          </div>
        </div>
        <div className="card border w-48 p-5 hover:bg-orange-500 hover:text-white">
          <figure className="mt-2">
            <img src="/src/assets/icons/Wrench.svg" alt="" />
          </figure>
          <div className="card-body items-center text-center mb-0 py-5">
            <h5 className="text-sm font-bold">Best Equipment</h5>
          </div>
        </div>
        <div className="card border w-48 p-5 hover:bg-orange-500 hover:text-white">
          <figure className="mt-2">
            <img src="/src/assets/icons/check.svg" alt="" />
          </figure>
          <div className="card-body items-center text-center mb-0 py-5">
            <h5 className="text-sm font-bold">100% Guranty</h5>
          </div>
        </div>
        <div className="card border w-48 p-5 hover:bg-orange-500 hover:text-white">
          <figure className="mt-2">
            <img src="/src/assets/icons/deliveryt.svg" alt="" />
          </figure>
          <div className="card-body items-center text-center mb-0 py-5">
            <h5 className="text-xs font-bold">Fastest Delivery</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatureSection;
