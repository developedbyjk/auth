// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcTcj2FF7ChLD0qhmRfz8POU62Hq7eFpE",
  authDomain: "authtest-a4cd4.firebaseapp.com",
  projectId: "authtest-a4cd4",
  storageBucket: "authtest-a4cd4.appspot.com",
  messagingSenderId: "115321553558",
  appId: "1:115321553558:web:aa02543e2cc3531f6338b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};