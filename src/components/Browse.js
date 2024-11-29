import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearchView);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div className="w-full">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
