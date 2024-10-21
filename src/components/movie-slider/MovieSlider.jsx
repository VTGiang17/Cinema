import React from "react";
import { useState } from "react";
import { ComingMovie, ShowingMovie } from "..";
import classNames from "classnames";

export const MovieSlider = () => {
  const [showingNavbarState, setShowingNavbarState] = useState(true);
  const [comingSoonNavbarState, setComingSoonNavbarState] = useState(false);

  const onClickShowingHandler = () => {
    setShowingNavbarState(true);
    setComingSoonNavbarState(false);
  };
  const onClickComingSoonHandler = () => {
    setShowingNavbarState(false);
    setComingSoonNavbarState(true);
  };
  console.log("1111");

  return (
    <>
      <div className="movie-section">
        <div className="container movie-section-container">
          <div className="section-title">
            <button
              onClick={onClickShowingHandler}
              className={classNames("showing-movie-btn button-34", {
                active: showingNavbarState === true,
              })}
              role="button"
            >
              Phim đang chiếu
            </button>
            <button
              onClick={onClickComingSoonHandler}
              className={classNames("coming-movie-btn button-34", {
                active: comingSoonNavbarState === true,
              })}
              role="button"
            >
              Phim sắp chiếu
            </button>
          </div>

          {showingNavbarState && <ShowingMovie />}
          {comingSoonNavbarState && <ComingMovie />}
        </div>
      </div>
    </>
  );
};
