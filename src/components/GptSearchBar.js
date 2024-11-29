import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
const GptSearchBar = () => {
  const displayLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center">
      <form className="w-[500px] relative pt-[10%] ">
        <div className="relative">
          <input
            type="search"
            placeholder={lang[displayLanguage].searchPlaceHolder}
            className="w-full p-4 rounded-full bg-slate-800 text-white"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 text-white font-bold bg-slate-900 rounded-full opacity-80">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
