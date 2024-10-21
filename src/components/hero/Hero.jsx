import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { sliderData } from "../../assets/mockData";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const autoSwitchRef = useRef();

  const onPrevClickHandler = () => {
    stopAutoSwitch();
    setActiveIndex((prev) => {
      if (prev - 1 < 0) {
        return sliderData.length - 1;
      }
      return prev - 1;
    });
    startAutoSwitch();
  };

  const onNextClickHandler = () => {
    stopAutoSwitch();
    setActiveIndex((prev) => {
      if (prev + 1 >= sliderData.length) {
        return 0;
      }
      return prev + 1;
    });
    startAutoSwitch();
  };

  const onThumbnailClickHandler = (itemIndex) => {
    stopAutoSwitch();
    setActiveIndex(itemIndex);
    startAutoSwitch();
  };

  const stopAutoSwitch = () => {
    clearInterval(autoSwitchRef.current);
  };

  const startAutoSwitch = () => {
    autoSwitchRef.current = setInterval(() => {
      onNextClickHandler();
    }, 3000);
  };

  useEffect(() => {
    startAutoSwitch();

    //cleanup func
    return () => {
      stopAutoSwitch();
    };
  });

  return (
    <div className="hero">
      <div className="hero-wrapper">
        {sliderData.map((item, itemIdx) => {
          return (
            <div
              className={classNames("hero-item", {
                active: activeIndex === itemIdx,
              })}
              key={`hero_item_${itemIdx}`}
            >
              <img className="hero-img" src={item.imageUrl} alt="" />
              <div className="hero-content">
                <h4 className="release-time">{item.createdDate}</h4>
                <h1 className="movie-name">{item.title}</h1>
                <div className="movie-detail-btn">
                  <Link
                    to={{
                      pathname: "/",
                    }}
                    className="button-34 more-inf"
                    role="button"
                  >
                    Xem chi tiết
                  </Link>
                  <Link
                    to={{
                      pathname: "/",
                    }}
                    className="button-34 booking-ticket"
                    role="button"
                  >
                    Đặt vé
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrows">
        <button className="prev" onClick={onPrevClickHandler}>
          {"<"}
        </button>
        <button className="next" onClick={onNextClickHandler}>
          {">"}
        </button>
      </div>
      <div className="thumbnail-hot-movie">
        {sliderData.map((item, itemIdx) => {
          return (
            <div
              className={classNames("hot-movie-item", {
                active: itemIdx === activeIndex,
              })}
              key={`hero_thumbnail_${itemIdx}`}
              onClick={() => {
                onThumbnailClickHandler(itemIdx);
              }}
            >
              <img src={item.thumbnailUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
