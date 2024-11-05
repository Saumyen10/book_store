// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7dz83YR_LFb1pkr9D2DZViiTTLXWDmZM",
  authDomain: "bookverse-f9b06.firebaseapp.com",
  projectId: "bookverse-f9b06",
  storageBucket: "bookverse-f9b06.appspot.com",
  messagingSenderId: "104056526572",
  appId: "1:104056526572:web:114d03ac81d35dbab737c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;