// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import { createBrowserRouter, RouterProvider } from "react-router-dom"; // <-- Commented out import

// const router = createBrowserRouter([ // <-- Commented out code
//    {
//      path: "/",
//      element: <App />,
//    },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */} {/* <-- Commented out JSX */}
    <App />
  </React.StrictMode>
);
