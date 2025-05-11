import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./index.css";
import App from "./App.jsx";

const Homepage = React.lazy(() => import("./pages/Homepage.jsx"));
const Listing = React.lazy(() => import("./pages/Listings.jsx"));
const Agents = React.lazy(() => import("./pages/AgentsList.jsx"));
const AboutUs = React.lazy(() => import("./pages/About.jsx"));
const ContactUs = React.lazy(() => import("./pages/Contact.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/listing",
        element: <Listing />
      },
      {
        path: "/agents",
        element: <Agents />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
