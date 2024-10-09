import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo header__logo">
        <Link href="./index.html">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar">
        <li>
          <Link className="nav-link" to={{ pathname: "/" }}>
            Trang chủ
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={{ pathname: "/movie-schedule" }}>
            Lịch chiếu
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={{ pathname: "/product-list" }}>
            Phim
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={{ pathname: "/news" }}>
            Tin tức
          </Link>
        </li>
      </ul>
      <div className="login">
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Nhập phim..."
          />
        </div>
        <i className="fa-solid fa-circle-user fa-2xl user-login"></i>
        <i className="header-cart fa-solid fa-ticket fa-2xl"></i>
        <i className="header-like fa-sharp fa-solid fa-heart fa-2xl"></i>
      </div>
    </header>
  );
};
