import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Pages/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home, { loader as homeMovieTvLoader } from "./Pages/Home";
import Movie from "./Pages/Movie";
import Search, { loader as searchLoader } from "./Pages/Search";
import Category from "./Pages/Category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Originals from "./Pages/Originals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeMovieTvLoader,
      },
      {
        path: "/search",
        element: <Search />,
        loader: searchLoader,
        id: "search",
      },
      {
        path: "/movies/:movieId",
        element: <Movie />,
      },
      {
        path: "/tv/:showId",
        element: <Originals />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
