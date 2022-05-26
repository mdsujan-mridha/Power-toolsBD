// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL9ehWXTOVUBmqG9lMkUB11VbfGXs33Mc",
  authDomain: "power-toolsbd.firebaseapp.com",
  projectId: "power-toolsbd",
  storageBucket: "power-toolsbd.appspot.com",
  messagingSenderId: "226843516483",
  appId: "1:226843516483:web:eab4154ecdc3f9cbbdfef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;