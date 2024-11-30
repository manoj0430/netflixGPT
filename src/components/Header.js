import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearchView);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUsers());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleToggleGptSearch = () => {
    //handle gpt search toggle
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO} alt="NetflixGPT Logo" />
      {user && (
        <div className="flex p-4">
          {showGptSearchView && (
            <select
              className="mx-2 bg-red-600 rounded-lg w-20 h-10 my-1 font-bold text-white"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="bg-gray-800 text-white"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="mx-2 bg-red-600 rounded-lg w-24 h-10 my-1 font-bold text-white"
            onClick={handleToggleGptSearch}
          >
            {showGptSearchView ? "Home Page" : "GPTSearch"}
          </button>
          <img className="w-12 h-12 mx-2" src={user.photoURL} alt="User-Icon" />
          <button
            className="mx-2 bg-red-600 rounded-lg w-20 h-10 my-1 font-bold text-white"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
