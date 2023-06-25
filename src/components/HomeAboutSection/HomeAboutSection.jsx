import React from "react";

const HomeAboutSection = () => {
  return (
    <div className="hero my-16 pt-10 pb-16">
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src="/src/assets/images/about_us/person.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src="/src/assets/images/about_us/parts.jpg"
            className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="w-1/2 space-y-6">
          <h5 className="text-orange-600 text-xl font-bold">About</h5>
          <h1 className="text-4xl font-bold w-1/2">
            We are qualified & of experience in this field
          </h1>
          <p className="text-gray-500">
            {`There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.`}
          </p>
          <p className="text-gray-500">
            {`the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.`}
          </p>
          <button className="btn bg-orange-600 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
