// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJytWbUd3nG5r5olYL1s99F_Wd5ppw_G0",
  authDomain: "file-share-app-5b54a.firebaseapp.com",
  projectId: "file-share-app-5b54a",
  storageBucket: "file-share-app-5b54a.appspot.com",
  messagingSenderId: "411529358702",
  appId: "1:411529358702:web:590274c6de5bc1faf5657f",
  measurementId: "G-RQS5W7SX9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);