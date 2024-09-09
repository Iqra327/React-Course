// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhAVSp915ODi_4KNGGQDnLYnsFbB4MqqI",
  authDomain: "react-course-fbc94.firebaseapp.com",
  projectId: "react-course-fbc94",
  storageBucket: "react-course-fbc94.appspot.com",
  messagingSenderId: "433106381300",
  appId: "1:433106381300:web:dc602627e7bf66980c31a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);