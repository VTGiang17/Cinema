import React from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const params = useParams();
  console.log(params);
  return <div>MOvie Detail here - {params.movie_id}</div>;
};
