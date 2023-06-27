import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeTestimonialSection = () => {
  return (
    <div className="my-16 py-16">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-orange-600">Testimonial</h3>
        <h2 className="text-3xl">What Customer Says</h2>
        <div className="flex justify-center pt-3">
          <p className="w-1/2 text-gray-500">{`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div className="card border p-10 shadow-xl">
          <div className="flex justify-between items-center px-8">
            <div className="flex items-center gap-5">
              <figure>
                <img
                  src="/src/assets/images/about_us/person.jpg"
                  className="w-20 h-20 rounded-full"
                  alt=""
                />
              </figure>
              <div>
                <h2 className="text-2xl font-bold mb-1">Amio Das</h2>
                <p className="text-sm font-medium">Businessman</p>
              </div>
            </div>
            <figure>
              <img src="/src/assets/icons/quote.svg" className="w-24" alt="" />
            </figure>
          </div>
          <div className="card-body pt-4">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
            <div className="space-x-2 text-orange-600 mt-5">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <div className="card border p-10 shadow-xl">
          <div className="flex justify-between items-center px-8">
            <div className="flex items-center gap-5">
              <figure>
                <img
                  src="/src/assets/images/about_us/person.jpg"
                  className="w-20 h-20 rounded-full"
                  alt=""
                />
              </figure>
              <div>
                <h2 className="text-2xl font-bold mb-1">Amio Das</h2>
                <p className="text-sm font-medium">Businessman</p>
              </div>
            </div>
            <figure>
              <img src="/src/assets/icons/quote.svg" className="w-24" alt="" />
            </figure>
          </div>
          <div className="card-body pt-4">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
            <div className="space-x-2 text-orange-600 mt-5">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonialSection;
