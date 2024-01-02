// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC-U2nBFpGeFr6pKBc8j_tcRGtLWWDtSC4",
    authDomain: "clone-39af5.firebaseapp.com",
    projectId: "clone-39af5",
    storageBucket: "clone-39af5.appspot.com",
    messagingSenderId: "792265411587",
    appId: "1:792265411587:web:d03a83879ed6ac3928d236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, provider, timestamp };


