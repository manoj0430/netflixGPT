// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaDsTrmt-pmHEYZv90T12p114c9Saq3vU",
  authDomain: "netflixgpt-c3010.firebaseapp.com",
  projectId: "netflixgpt-c3010",
  storageBucket: "netflixgpt-c3010.firebasestorage.app",
  messagingSenderId: "1005770139134",
  appId: "1:1005770139134:web:e48deb06bd6fe3ba64ccaf",
};

// Initialize Firebase
// eslint-disable-next-line 
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
