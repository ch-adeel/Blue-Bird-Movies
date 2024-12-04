// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDShlMx2o33uuabeutrXQarqtNeNnSRTuA",
  authDomain: "bluebird-movies-393c9.firebaseapp.com",
  projectId: "bluebird-movies-393c9",
  storageBucket: "bluebird-movies-393c9.appspot.com",
  messagingSenderId: "346320303630",
  appId: "1:346320303630:web:8e47c06fc62da5fbbeee5f",
  measurementId: "G-KJCGLYJ5X8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;