import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyCne2Vx-6_cEUsy0mlI6Ue6QYpUU1tbfTY",
  authDomain: "shop-1910b.firebaseapp.com",
  databaseURL: "https://shop-1910b-default-rtdb.firebaseio.com",
  projectId: "shop-1910b",
  storageBucket: "shop-1910b.appspot.com",
  messagingSenderId: "634521739548",
  appId: "1:634521739548:web:15149a0578d6750901dad9",
  measurementId: "G-2F1B2D2DBM",
});

export const firestore = getFirestore(firebase);
