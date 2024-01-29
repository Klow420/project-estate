// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "projet-mern-estate.firebaseapp.com",
  projectId: "projet-mern-estate",
  storageBucket: "projet-mern-estate.appspot.com",
  messagingSenderId: "747089798386",
  appId: "1:747089798386:web:9f357ebdfbd807b0cd9c6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);