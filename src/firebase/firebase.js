// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO9IuwxobP0wInNzR-N7Ufm34bcKVXwpY",
  authDomain: "e-commerce-coder-5e1d0.firebaseapp.com",
  projectId: "e-commerce-coder-5e1d0",
  storageBucket: "e-commerce-coder-5e1d0.appspot.com",
  messagingSenderId: "197872980861",
  appId: "1:197872980861:web:008a07033431e34f49f214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);