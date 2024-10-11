import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { ProductList } from "../pages/movie-list";
import { News } from "../pages/news";
import { BaseLayout } from "../components";
import { MovieSchedule } from "../pages/movie-schedule";
import { MovieDetail } from "../pages/movie-detail";
import { PageNotFound } from "../pages/page-not-found";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<BaseLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="movie-schedule" element={<MovieSchedule />} />
          <Route path="movie-list" element={<ProductList />} />
          <Route path="movie/:movie_id" element={<MovieDetail></MovieDetail>} />
          <Route path="news" element={<News />} />
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
