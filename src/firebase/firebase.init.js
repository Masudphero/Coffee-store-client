// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtaju2rEqFZALe9qw3Qsi4koc4VFFJ9DI",
  authDomain: "coffee-store-80c1a.firebaseapp.com",
  projectId: "coffee-store-80c1a",
  storageBucket: "coffee-store-80c1a.firebasestorage.app",
  messagingSenderId: "785763047430",
  appId: "1:785763047430:web:2d3ace395492fecc674b87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);