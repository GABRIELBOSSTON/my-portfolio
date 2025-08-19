// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOBgGb6p9uN_ZQUO7CS6f5yu5NfeeQd9o",
  authDomain: "myportfoliochat-294d0.firebaseapp.com",
  projectId: "myportfoliochat-294d0",
  storageBucket: "myportfoliochat-294d0.firebasestorage.appspot.com", // Ubah ke .appspot.com jika error
  messagingSenderId: "1028633746814",
  appId: "1:1028633746814:web:b83a01db14ccf55d55672f"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
