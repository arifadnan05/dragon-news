// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkPzFnotEN14Zn3Tg7N67bp3IkqsZiE9Q",
  authDomain: "dragon-news-eaf3f.firebaseapp.com",
  projectId: "dragon-news-eaf3f",
  storageBucket: "dragon-news-eaf3f.appspot.com",
  messagingSenderId: "347577579772",
  appId: "1:347577579772:web:6def62ac2d256a4b0dff79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;