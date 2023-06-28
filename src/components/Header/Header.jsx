import {
  faMagnifyingGlass,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to signing out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            toast("User Logged out!!!");
          })
          .catch((error) => {
            toast(error.message);
            console.log(error);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="bg-gray-100">
      <ToastContainer />
      <div className="container mx-auto flex justify-between items-center">
        <img width="80px" className="py-3" src="/logo.svg" alt="" />
        <div className="flex justify-center items-center gap-5">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/services">Services</ActiveLink>
          {/* <ActiveLink to="/blog">Blog</ActiveLink> */}
          {/* <ActiveLink to="/contact">Contact</ActiveLink> */}
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-circle">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className="btn btn-circle">
            <FontAwesomeIcon icon={faShoppingBag} />
          </button>
          {loading ? (
            <span className="loading loading-spinner text-orange-600"></span>
          ) : (
            ""
          )}
          {user ? (
            <div className="dropdown z-10">
              <label tabIndex={0} className="m-1 btn">
                <p className="text-orange-600 font-bold">{user?.displayName}</p>
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile">Your Profile</Link>
                </li>
                <li>
                  <Link to="/myBookings">My Bookings</Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
            <button className="btn bg-orange-600 text-white hover:bg-orange-700">Login</button>
            </Link>
          )}
          <button className="btn btn-outline">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
