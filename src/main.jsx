import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main/Main.jsx";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import AuthProvider from "./providers/AuthProvider";
import Profile from "./Pages/Profile/Profile";
import Checkout from "./Pages/Checkout/Checkout";
import Bookings from "./Pages/Bookings/Bookings";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile /></PrivateRoutes>,
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoutes><Checkout /></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/myBookings",
        element: <PrivateRoutes><Bookings /></PrivateRoutes>
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
