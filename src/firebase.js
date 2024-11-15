// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjq7Fyvfyp9X5CUtzWVRnw-q3PKouqkjU",
  authDomain: "vocesdelalba-f71e7.firebaseapp.com",
  projectId: "vocesdelalba-f71e7",
  storageBucket: "vocesdelalba-f71e7.firebasestorage.app",
  messagingSenderId: "956868202592",
  appId: "1:956868202592:web:d50d51d309bfae13a1b305",
  measurementId: "G-X7RBVJ9RRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;