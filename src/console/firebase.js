import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDfMxpQUGY_pD0QDRmN1waeAkYgB-BFrAI",
  authDomain: "react-login-547.firebaseapp.com",
  projectId: "react-login-547",
  storageBucket: "react-login-547.appspot.com",
  messagingSenderId: "8489676939",
  appId: "1:8489676939:web:1df04effd46879f4e9248e",
  measurementId: "G-4MMYLPVM3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const bd=getFirestore(app)
export const googleprovider=new GoogleAuthProvider()