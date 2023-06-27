import React, { useEffect, useState } from "react";
import "./HomeServicesSection.css";

const HomeServicesSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-16">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-orange-600">Service</h3>
        <h2 className="text-3xl">Our service Area</h2>
        <div className="flex justify-center pt-3">
          <p className="w-1/2 text-gray-500">{`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}</p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {services.map((service) => (
            <div
              key={service._id}
              className="card card-compact w-96 bg-base-100 shadow-xl mb-8"
            >
              <figure>
                <img src={service.img} alt="Shoes" />
              </figure>
              <div className="card-body space-y-3">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-gray-500 max-lines">{service.description}</p>
                <div className="card-actions flex justify-between items-center">
                  <p className="text-xl font-bold text-orange-600">
                    Price: {service.price}
                  </p>
                  <button className="btn bg-orange-500 text-white hover:bg-orange-600">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="btn btn-outline text-orange-600  px-6 py-4 hover:bg-orange-600 hover:border-0">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesSection;
