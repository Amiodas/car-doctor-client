import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="/src/assets/images/banner/1.jpg"
          className="w-full rounded-lg"
        />
        <div className="absolute h-full flex items-center pl-12 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-0">
          <div className="text-white space-y-8 w-1/2">
            <h2 className="text-6xl font-bold leading-tight">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-500 text-white border-0 hover:bg-orange-700 mr-5">Discover More</button>
              <button className="btn btn-outline btn-primary">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-16">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/src/assets/images/banner/2.jpg"
          className="w-full rounded-lg"
        />
        <div className="absolute h-full flex items-center pl-12 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-10">
          <div className="text-white space-y-8 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-500 mr-5">Discover More</button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-16">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="/src/assets/images/banner/3.jpg"
          className="w-full rounded-lg"
        />
        <div className="absolute h-full flex items-center pl-12 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-10">
          <div className="text-white space-y-8 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-500 mr-5">Discover More</button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-16">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="/src/assets/images/banner/4.jpg"
          className="w-full rounded-lg"
        />
        <div className="absolute h-full flex items-center pl-12 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-10">
          <div className="text-white space-y-8 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-orange-500 mr-5">Discover More</button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-16">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
