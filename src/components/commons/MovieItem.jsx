import React from "react";
import { Link } from "react-router-dom";

export const MovieItem = ({ movieItem }) => {
  return (
    <Link
      className="card-link"
      to={{
        pathname: `/movie/${movieItem.id}`,
      }}
    >
      <div className="card">
        <img src={movieItem.thumbImageURL} alt="" />
        <div className="card-content">
          <p className="card-title">{movieItem.movieTitle}</p>
          <p className="card-review">{movieItem.movieReview}</p>
        </div>
      </div>
    </Link>
  );
};
