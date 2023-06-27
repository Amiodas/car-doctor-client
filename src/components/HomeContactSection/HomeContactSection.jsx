import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeContactSection = () => {
  return (
    <div className="bg-gray-900 text-white grid grid-cols-3 rounded-lg px-10 py-16 mb-16">
      <div className="flex gap-5 py-10">
        <FontAwesomeIcon
          size="xl"
          className="border border-orange-600 text-orange-600 p-4 rounded"
          icon={faCalendarCheck}
        />
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-3xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-5 py-10">
        <FontAwesomeIcon
          size="xl"
          className="border border-orange-600 text-orange-600 p-4 rounded"
          icon={faPhone}
        />
        <div>
          <p>Have a question?</p>
          <h3 className="text-3xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex items-center gap-5 py-10">
        <FontAwesomeIcon
          size="xl"
          className="border border-orange-600 text-orange-600 p-4 rounded"
          icon={faLocation}
        />
        <div>
          <p>Need a repair? our address</p>
          <h3 className="text-3xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeContactSection;
