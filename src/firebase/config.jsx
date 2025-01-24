// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLStDFSDwTeZnaX6uSYfPFil5DRQJU0XA",
  authDomain: "miniblogreact-7f553.firebaseapp.com",
  projectId: "miniblogreact-7f553",
  storageBucket: "miniblogreact-7f553.firebasestorage.app",
  messagingSenderId: "473771336882",
  appId: "1:473771336882:web:21650389b416413d8b95ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };