import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, // Use REACT_APP_ prefix
  authDomain: "reactchatapplication-fbc46.firebaseapp.com",
  projectId: "reactchatapplication-fbc46",
  storageBucket: "reactchatapplication-fbc46.appspot.com", // Correct storageBucket
  messagingSenderId: "144182724221",
  appId: "1:144182724221:web:f66a081c9d83e93176d314"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
