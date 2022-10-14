// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4P_F2rWdZAa1NIEKADQO1wDGV5FLgn8A",
  authDomain: "cred-de0c3.firebaseapp.com",
  projectId: "cred-de0c3",
  storageBucket: "cred-de0c3.appspot.com",
  messagingSenderId: "314514382285",
  appId: "1:314514382285:web:12edd50c942b8cffbcb884",
  measurementId: "G-YQHDFMSZFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);