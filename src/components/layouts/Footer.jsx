import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-3 footer-col">
            <p>Chăm sóc khách hàng</p>
            <ul>
              <li>
                <Link href="">Trung Tâm Trợ Giúp</Link>
              </li>
              <li>
                <Link href="">Hướng Dẫn Mua Hàng</Link>
              </li>
              <li>
                <Link href="">Thanh Toán</Link>
              </li>
              <li>
                <Link href="">Chăm Sóc Khách Hàng</Link>
              </li>
              <li>
                <Link href="">Chính Sách Bảo Hành</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 footer-col">
            <p>Về DongHo</p>
            <ul>
              <li>
                <Link href="">Kênh Người Bán</Link>
              </li>
              <li>
                <Link href="">Chính Sách Bảo Mật</Link>
              </li>
              <li>
                <Link href="">Chính Hãng</Link>
              </li>
              <li>
                <Link href="">Điều Khoản DongHo</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 footer-col">
            <p>Theo dõi chúng tôi trên</p>
            <div className="row">
              <div className="col-2">
                <Link href="">
                  <i className="fa-brands fa-instagram fa-2xl"></i>
                </Link>
              </div>
              <div className="col-2">
                <Link href="">
                  <i className="fa-brands fa-facebook fa-2xl"></i>
                </Link>
              </div>
              <div className="col-2">
                <Link href="">
                  <i className="fa-brands fa-youtube fa-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
