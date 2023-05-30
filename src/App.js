import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import AddMovie from "./components/Dialog/AddMovie";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieListPage />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "new",
          element: <AddMovie title="ADD MOVIE" isShowed={true} />,
          errorElement: <NotFoundPage />,
        },
        {
          path: ":movieId",
          element: <MovieDetails />,
          errorElement: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
