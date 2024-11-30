import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import groq from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const displayLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const handleSearchText = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, like this example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. Output should be only 5 movies separated by a comma";

    const gptResults = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "llama3-8b-8192",
    });

    const gptMovies = gptResults.choices[0]?.message?.content
      .split(":")[1]
      .split(",")
      .map((movie) => movie.trim());

    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult);
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  return (
    <div className="flex justify-center">
      <form
        className="w-[500px] relative pt-[10%] "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative">
          <input
            type="search"
            ref={searchText}
            placeholder={lang[displayLanguage].searchPlaceHolder}
            className="w-full p-4 rounded-full bg-slate-800 text-white"
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 p-4 text-white font-bold bg-slate-900 rounded-full opacity-80"
            onClick={handleSearchText}
          >
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
