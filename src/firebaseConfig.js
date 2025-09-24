// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX88BU_V2HOT3YLbSnfUPY5peZrF5DG0c",
  authDomain: "crowdvote-43faa.firebaseapp.com",
  projectId: "crowdvote-43faa",
  storageBucket: "crowdvote-43faa.firebasestorage.app",
  messagingSenderId: "157300378084",
  appId: "1:157300378084:web:26b0567029c6c794c5dff1",
  measurementId: "G-HH170XDJ69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
