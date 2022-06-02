
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwxV-AHxFilHDq0358BAqqemJoNzUMrIQ",
  authDomain: "musicon-c92eb.firebaseapp.com",
  projectId: "musicon-c92eb",
  storageBucket: "musicon-c92eb.appspot.com",
  messagingSenderId: "392094456850",
  appId: "1:392094456850:web:4ef5e0d8a352089cfd8ccb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function getFirestoreApp() {
  return app;
}