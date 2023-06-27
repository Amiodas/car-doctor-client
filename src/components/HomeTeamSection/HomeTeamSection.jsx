import React from "react";

const HomeTeamSection = () => {
  return (
    <div className="my-16">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-orange-600">Team</h3>
        <h2 className="text-3xl">Meet Our Team</h2>
        <div className="flex justify-center pt-3">
          <p className="w-1/2 text-gray-500">{`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}</p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-3">
        <div className="card w-96 border shadow-xl p-3">
          <figure>
            <img
              src="/src/assets/images/team/1.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">Car Engineer</h3>
            <p className="font-medium">Engine Expert</p>
            <div className="flex gap-3 mt-5">
              <button className="btn btn-circle btn-primary lowercase font-bold">f</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">in</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">t</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">i</button>
            </div>
          </div>
        </div>
        <div className="card w-96 border shadow-xl p-3">
          <figure>
            <img
              src="/src/assets/images/team/2.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">Car Engineer</h3>
            <p className="font-medium">Engine Expert</p>
            <div className="flex gap-3 mt-5">
              <button className="btn btn-circle btn-primary lowercase font-bold">f</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">in</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">t</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">i</button>
            </div>
          </div>
        </div>
        <div className="card w-96 border shadow-xl p-3">
          <figure>
            <img
              src="/src/assets/images/team/3.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title">Car Engineer</h3>
            <p className="font-medium">Engine Expert</p>
            <div className="flex gap-3 mt-5">
              <button className="btn btn-circle btn-primary lowercase font-bold">f</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">in</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">t</button>
              <button className="btn btn-circle btn-primary lowercase font-bold">i</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeamSection;
