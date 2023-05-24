import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieListPage />,
      errorElement: <NotFoundPage />,
      children: [
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
