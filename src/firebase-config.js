// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABGBrEbnT21FB2NIsGtAQbk7gBRDHENiw",
  authDomain: "willblog-beb4a.firebaseapp.com",
  projectId: "willblog-beb4a",
  storageBucket: "willblog-beb4a.appspot.com",
  messagingSenderId: "640182083309",
  appId: "1:640182083309:web:b93232f9b04c637c86f6e4",
  measurementId: "G-SH24595776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();