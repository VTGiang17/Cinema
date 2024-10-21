import React, { useMemo } from "react";
import { useState } from "react";
import { LoginComponent, RegisterComponent } from "../../components";
import classNames from "classnames";
import { Link, Navigate, useNavigate } from "react-router-dom";

const mockUserData = {
  username: "admin@gmail.com",
  password: "admin@123",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
};

export const Login = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const onClickLogin = () => {
    setLogin(true);
    setRegister(false);
  };
  const onClickRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  const loginHandler = (userInfo) => {
    if (
      userInfo.username === mockUserData.username &&
      userInfo.password === mockUserData.password
    ) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          isLoggedIn: true,
          username: mockUserData.username,
          avatar: mockUserData.avatar,
        })
      );
      navigate({ pathname: "/" });
    } else {
      alert("Username or password is not correct");
    }
  };

  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  }, []);

  if (user?.isLoggedIn) {
    return <Navigate to={{ pathname: "/" }} />;
  }

  return (
    <>
      <div className="login-wrapper">
        <div className="login-form">
          <div className="login-bar">
            <div
              className={classNames("login tab", {
                active: login === true,
              })}
              onClick={onClickLogin}
            >
              <h4 className="active">Đăng nhập</h4>
            </div>
            <div
              className={classNames("register tab", {
                active: register === true,
              })}
              onClick={onClickRegister}
            >
              <h4>Đăng ký</h4>
            </div>
          </div>
          {login && <LoginComponent onLoginBtnClick={loginHandler} />}
          {register && <RegisterComponent />}
          <Link className="home-page" to={{ pathname: "/" }}>
            <i className="fa-solid fa-house fa-2xl"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
