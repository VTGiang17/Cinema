import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { MovieItem } from "../commons/MovieItem";
import { sliderShowingMovie } from "../../assets/mockData";

export const ShowingMovie = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={4}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {sliderShowingMovie.map((item, index) => {
          return (
            <SwiperSlide key={`movie_${index}`}>
              <MovieItem movieItem={item} />
            </SwiperSlide>
          );
        })}
        <i className="fa-solid fa-circle-left fa-2xl swiper-button-prev"></i>
        <i className="fa-solid fa-circle-right fa-2xl swiper-button-next"></i>
      </Swiper>
    </>
  );
};
