import React, { useEffect, useMemo } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/logo.jpg";
import { DropdownMenu } from "..";

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  const onScrollHandler = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    //cleanup func
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  }, []);

  console.log(user?.isLoggedIn);

  return (
    <header
      className={classNames("header", {
        scrolled: scroll === true,
      })}
    >
      <div className="logo header__logo">
        <Link to={{ pathname: "/" }}>
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
        {user?.isLoggedIn ? (
          <DropdownMenu />
        ) : (
          <Link className="link-user-login" to={{ pathname: "/login" }}>
            <i className="fa-solid fa-circle-user fa-2xl user-login"></i>
          </Link>
        )}

        <i className="header-cart fa-solid fa-ticket fa-2xl"></i>
        <i class="fa-sharp fa-solid fa-heart fa-2xl"></i>
      </div>
    </header>
  );
};
