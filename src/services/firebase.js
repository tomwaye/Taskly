// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApJDximIQGkQ7Jwt21ZKiOVGWiZAPnkRU",
  authDomain: "taskly-ae0f4.firebaseapp.com",
  projectId: "taskly-ae0f4",
  storageBucket: "taskly-ae0f4.firebasestorage.app",
  messagingSenderId: "8727573278",
  appId: "1:8727573278:web:4be2375058ad51f0454f0f",
  measurementId: "G-BN0NK7P5WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)