/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4hyCyozCG8hlv4hYzXQ9YzAbTdro2YtU",
  authDomain: "shahina-skincare.firebaseapp.com",
  projectId: "shahina-skincare",
  storageBucket: "shahina-skincare.appspot.com",
  messagingSenderId: "275323700379",
  appId: "1:275323700379:web:866b4acc68575e0305b23e",
  measurementId: "G-F1MPXLTRQ0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
