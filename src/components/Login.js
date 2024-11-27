/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleIsSign = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dadb130d-463b-4e5b-b335-038ed912059e/web_tall_panel/IN-en-20241118-TRIFECTA-perspective_19bdd42f-315f-4636-b5fb-3cabd8eb471c_large.jpg"
          alt="Netflix Body Image"
        />
      </div>

      <form className="absolute w-1/4 bg-black text-white p-12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-2 w-full  bg-gray-700 opacity-70"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="my-4 p-2 w-full bg-gray-700 opacity-70"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full  bg-gray-700 opacity-70"
        />
        <button className="my-6 p-2 w-full font-bold bg-red-700 rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleIsSign}>
          {isSignIn
            ? "New to Netflix? SignUp Here"
            : "Already Registered!! Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
