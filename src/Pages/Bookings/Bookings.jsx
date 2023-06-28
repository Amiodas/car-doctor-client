import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
      const remaining = bookings.filter((booking) => booking._id !== id);
      setBookings(remaining);
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
            <div className="text-white mt-2">Bookings</div>
          </div>
        </div>
      </div>
      {user && bookings.length !== 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  {/* <label>
                  <input type="checkbox" className="checkbox" />
                </label> */}
                </th>
                <th>Image</th>
                <th>Service</th>
                <th>Price</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <th>
                    <div>
                      <button
                        onClick={() => handleDeleteBooking(booking._id)}
                        className="btn btn-circle bg-gray-950 text-white font-bold hover:text-black"
                      >
                        X
                      </button>
                    </div>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-32 h-32">
                          <img
                            src={booking.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost text-sm">
                      {booking.service}
                    </span>
                  </td>
                  <td>$ {booking.price}</td>
                  <td>{booking.date}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl text-center">
            You do not added any service.
          </h3>
          <div className="text-center mt-5">
            <Link to="/services">
              <button className="btn btn-outline text-orange-600 hover:bg-orange-600">
                Go to services
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
