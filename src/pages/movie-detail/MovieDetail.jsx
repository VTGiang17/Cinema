import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allData } from "../../assets/mockData";
import { MovieDetailComponent, MovieSlider } from "../../components";

export const MovieDetail = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    // Tìm bộ phim dựa trên movie_id
    const selectedMovie = allData.find((item) => item.id === movie_id);
    setMovie(selectedMovie);
    window.scrollTo(0, 0);
  }, [movie_id]);

  console.log(movie);

  return (
    <>
      {movie ? (
        <MovieDetailComponent movieData={movie} />
      ) : (
        <p>Không tìm thấy film</p>
      )}
      <MovieSlider />
    </>
  );
};
