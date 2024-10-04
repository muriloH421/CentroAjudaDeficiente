import App from "./pages/App";

import ReactDOM from "react-dom/client";
import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./routes/Login/Login.jsx";
import Home from "./routes/Home/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
