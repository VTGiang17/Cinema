import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const MovieInf = ({ movieData, onClickBookTicket }) => {
  return (
    <>
      <div className="movie-detail">
        <h4 className="release-time">29 tháng 2, 2023</h4>
        <h1 className="movie-name">{movieData.movieTitle}</h1>
        <span>Một bộ phim của</span> <b className="director">Celine Song</b>
        <div className="movie-content-div">
          <p className="movie-content">{movieData.movieReview}</p>
        </div>
        <h3 className="cast-list">Diễn viên</h3>
        <div className="swiper movie-cast">
          <div className="swiper-wrapper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={1}
              slidesPerView={4}
              loop={false}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {movieData.actor.map((item, index) => {
                return (
                  <SwiperSlide>
                    <div className="swiper-slide cast-slide">
                      <img src={item.actorImg} />
                      <h4 className="cast-name">{item.actorName}</h4>
                    </div>
                  </SwiperSlide>
                );
              })}

              <i className="fa-solid fa-circle-left fa-2xl swiper-button-prev"></i>
              <i className="fa-solid fa-circle-right fa-2xl swiper-button-next"></i>
            </Swiper>
          </div>
        </div>
        <div className="movie-detail-btn">
          <button className="button-34 more-inf" role="button">
            Thêm vào yêu thích
          </button>
          <button
            className="button-34 booking-ticket"
            role="button"
            onClick={onClickBookTicket}
          >
            Đặt vé
          </button>
        </div>
      </div>
    </>
  );
};
