import React from "react";
import { Footer, Header } from "..";
import { Outlet } from "react-router";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
