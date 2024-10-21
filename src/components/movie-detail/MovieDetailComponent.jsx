import React, { useEffect, useState } from "react";
import { BookTicket, MovieInf } from "..";
export const MovieDetailComponent = ({ movieData }) => {
  const [ticket, setTicket] = useState(false);
  const onClickBookTicket = () => {
    setTicket(true);
  };
  const onClickOut = () => {
    setTicket(false);
  };

  useEffect(() => {
    setTicket(false);
  }, [movieData]);
  return (
    <>
      <div className="hero hero-detail-product">
        <img className="background-img" src={movieData.background} />
        {ticket ? (
          <BookTicket movieData={movieData} onClickOut={onClickOut} />
        ) : (
          <MovieInf
            movieData={movieData}
            onClickBookTicket={onClickBookTicket}
          />
        )}
      </div>
    </>
  );
};
