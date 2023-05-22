import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieListPage />}>
            <Route index element={<p>INDEX</p>} />
            <Route path="/:movieId" element={<p>MOVIE ID</p>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
