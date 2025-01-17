// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzMYEHBX5HLAd-7KLDZ8MfVvn83k0clJo",
  authDomain: "asapbank-a9c83.firebaseapp.com",
  projectId: "asapbank-a9c83",
  storageBucket: "asapbank-a9c83.firebasestorage.app",
  messagingSenderId: "536448230049",
  appId: "1:536448230049:web:7d497c260ab7d2d51ac6e0",
  measurementId: "G-7X2W8WZ98X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)