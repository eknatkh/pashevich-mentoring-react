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
            <Route index element={<MovieListPage />} />
            {/* <Route path="search" element={<MovieListPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
