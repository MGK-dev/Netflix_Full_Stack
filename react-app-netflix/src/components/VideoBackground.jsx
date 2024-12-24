import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";
import store from "../redux/store";

const VideoBackground = ({movieId,}) => {

  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  useMovieById(movieId);

   // Ensure trailerMovie exists before rendering iframe
   if (!trailerMovie) return <div>Loading...</div>;

  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={ `w-screen aspect-video`} 
        src={`https://www.youtube.com/embed/${trailerMovie.key}?si=PWj7ck2PhGddk_tY&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
