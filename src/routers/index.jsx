import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { ProductList } from "../pages/movie-list";
import { News } from "../pages/news";
import { BaseLayout } from "../components";
import { MovieSchedule } from "../pages/movie-schedule";
import { MovieDetail } from "../pages/movie-detail";
import { PageNotFound } from "../pages/page-not-found";
import { Login } from "../pages/login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="movie-schedule" element={<MovieSchedule />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="movie/:movie_id" element={<MovieDetail />} />
          <Route path="news" element={<News />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
