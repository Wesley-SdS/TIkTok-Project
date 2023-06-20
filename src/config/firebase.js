// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8hyA7up0RoDBb1AIrvJkyEPkYwvJ-QRE",
  authDomain: "tiktok-devjor.firebaseapp.com",
  projectId: "tiktok-devjor",
  storageBucket: "tiktok-devjor.appspot.com",
  messagingSenderId: "713110130886",
  appId: "1:713110130886:web:5c4e65dc1b94ca1f7d47c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;