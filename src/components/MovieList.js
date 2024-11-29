import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <div className="px-6 ">
      <h1 className=" ml-6 py-2 my-2 font-bold text-white text-lg">{title}</h1>

      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
