// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpsP3Ndevs-Rfku0-ebIqX4D2VQxVBoew",
  authDomain: "remedial-auth.firebaseapp.com",
  projectId: "remedial-auth",
  storageBucket: "remedial-auth.appspot.com",
  messagingSenderId: "1004324827072",
  appId: "1:1004324827072:web:e0d8cc594008f9c8c02225",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
