/* eslint-disable jsx-a11y/img-redundant-alt */
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilis/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../utilis/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef();

  const toggleIsSign = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormValidate = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUsers({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
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

      <form
        className="absolute w-1/4 bg-black text-white p-12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="my-4 p-2 w-full  bg-gray-700 opacity-70"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="my-4 p-2 w-full bg-gray-700 opacity-70"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="my-4 p-2 w-full  bg-gray-700 opacity-70"
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button
          className="my-6 p-2 w-full font-bold bg-red-700 rounded-lg"
          onClick={handleFormValidate}
        >
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
