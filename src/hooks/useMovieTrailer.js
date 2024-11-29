import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const movieTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = movieTrailers.length ? movieTrailers[0] : json.results[0];

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default useMovieTrailer;
