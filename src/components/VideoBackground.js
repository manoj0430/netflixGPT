import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const videoTrailer = useSelector((store) => store.movies?.movieTrailer);
  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/912649/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const movieTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = movieTrailers.length ? movieTrailers[0] : json.results[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoTrailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
