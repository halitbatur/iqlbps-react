// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXgIrUubwG4_t23vJFQ0rrpX1pQz1P9Nw",
  authDomain: "iqlbps-recoded.firebaseapp.com",
  projectId: "iqlbps-recoded",
  storageBucket: "iqlbps-recoded.appspot.com",
  messagingSenderId: "632567994595",
  appId: "1:632567994595:web:b76af7eea8b1cc35328dd6",
  measurementId: "G-RYN6EK9E12",
};

// .env files

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;
