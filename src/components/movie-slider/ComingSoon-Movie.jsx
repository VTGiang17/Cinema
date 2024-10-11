import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MovieItem } from "..";
import { sliderComingSoonMovie } from "../../assets/mockData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ComingMovie = () => {
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
        {sliderComingSoonMovie.map((item, index) => {
          return (
            <SwiperSlide key={`movie_${index}`}>
              <MovieItem movieItem={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
