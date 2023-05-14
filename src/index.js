import React from "react";
import ReactDOM from "react-dom/client";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
