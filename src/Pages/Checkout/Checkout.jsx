import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, title, img } = service;

  const navigate = useNavigate();
  console.log(service);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const message = form.message.value;
    console.log(name, date, email, price, message);
    const order = {
      customerName: name,
      img,
      date,
      email,
      price,
      service: title,
      service_id: _id,
      message: message,
      status: "PENDING"
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/myBookings");
        console.log(data);
      });
  };

  const styles = {
    trapezoid: {
      width: 250,
      height: 0,
      borderBottomWidth: 40,
      borderBottomColor: "#ff3811",
      borderLeftWidth: 40,
      borderLeftColor: "transparent",
      borderRightWidth: 40,
      borderRightColor: "transparent",
      borderStyle: "solid",
    },
  };
  return (
    <div className="mb-16">
      <div className="relative">
        <figure>
          <img
            src="/src/assets/images/checkout/checkout.png"
            alt=""
            className="min-w-full h-72"
          />
        </figure>
        <div className="flex justify-center transform -translate-y-10">
          <div
            style={styles.trapezoid}
            className="relative flex justify-center"
          >
            <div className="text-white mt-2">Home/Checkout</div>
          </div>
        </div>
      </div>
      <div className="card bg-gray-200 p-16">
        <h2 className="text-2xl mb-5">
          <span className="font-bold text-orange-600">Book Service:</span>{" "}
          {service?.title}
        </h2>
        <form onSubmit={handleBookService} className="space-y-5">
          <div className="grid grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Type here"
                className="input w-full"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Date</label>
              <input
                type="date"
                name="date"
                placeholder="Type here"
                className="input w-full"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="Type here"
                className="input w-full"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={service?.price}
                placeholder="Type here"
                className="input w-full"
                readOnly
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered w-full h-48"
              placeholder="type here"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-orange-600 text-white btn-block mt-8 hover:bg-orange-700"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
