import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast("Successfully login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast("Successfully sign in with google");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img
            src="/src/assets/images/login/login.svg"
            className="pr-16"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-center text-3xl font-bold mb-4">Login</h3>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-orange-600 text-white hover:bg-orange-700"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center mb-6">
            <p className="mr-1">Have no account?</p>
            <Link className="text-orange-600 hover:underline" to="/register">
              Sign Up
            </Link>
          </div>
          <div className="flex justify-center mb-6">
            <button className="btn btn-circle bg-blue-600 text-white mr-3">
              in
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-circle bg-orange-700 text-white"
            >
              G
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
