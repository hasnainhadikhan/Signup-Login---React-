// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZOK_F9YMxMtGpJCzRSxrsafXhd-QOqCA",
  authDomain: "authentication-6944a.firebaseapp.com",
  projectId: "authentication-6944a",
  storageBucket: "authentication-6944a.appspot.com",
  messagingSenderId: "967372357259",
  appId: "1:967372357259:web:5eb4f10a125f9fa74e1e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth} ;