// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIcaT5qCwmw93lj7upKes9ZVS4E9aMJP8",
  authDomain: "mytryon-f15be.firebaseapp.com",
  projectId: "mytryon-f15be",
  storageBucket: "mytryon-f15be.firebasestorage.app",
  messagingSenderId: "206379523209",
  appId: "1:206379523209:web:f5d19c6e880a8e94cc3a58"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
