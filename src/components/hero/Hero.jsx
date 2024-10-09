import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

const sliderData = [
  {
    imageUrl:
      "https://c8.alamy.com/comp/HEGYX5/i-walk-alone-1948-paramount-pictures-film-noir-with-lizabeth-scott-HEGYX5.jpg",
    thumbnailUrl:
      "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
    createdDate: "29 tháng 2, 2023",
    title: "House of Dragon",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/hd/dark-netflix-ls3t9oqfzknzkdp8.jpg",
    thumbnailUrl:
      "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
    createdDate: "29 tháng 2, 2023",
    title: "House of Dragon",
  },
  {
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/184/635/608/ipsum-lorem-wallpaper-preview.jpg",
    thumbnailUrl:
      "https://img.freepik.com/premium-psd/movie-poster-design-template_841014-16988.jpg?w=360",
    createdDate: "29 tháng 2, 2023",
    title: "House of Dragon",
  },
  {
    imageUrl: "https://images4.alphacoders.com/132/1321800.jpeg",
    thumbnailUrl:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/t/h/the_first_slam_dunk_-_key_visual_1_.jpg",
    createdDate: "29 tháng 2, 2023",
    title: "House of Dragon",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/blade-runner-2049-ln4wirn5204bujot.jpg",
    thumbnailUrl:
      "https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90&crop=false",
    createdDate: "29 tháng 2, 2023",
    title: "House of Dragon",
  },
];
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
                  <a
                    href="./product-item.html.html"
                    className="button-34 more-inf"
                    role="button"
                  >
                    Xem chi tiết
                  </a>
                  <a
                    href="./product-item.html"
                    className="button-34 booking-ticket"
                    role="button"
                  >
                    Đặt vé
                  </a>
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
