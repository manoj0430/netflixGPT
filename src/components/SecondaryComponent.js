import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-40 pl-12 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Adventure"} movies={movies.popularMovies} />
        <MovieList title={"Thriller"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
