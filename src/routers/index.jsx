import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { ProductList } from "../pages/product-list";
import { News } from "../pages/news";
import { BaseLayout } from "../components";
import { MovieSchedule } from "../pages/movie-schedule";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<BaseLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="movie-schedule" element={<MovieSchedule />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
