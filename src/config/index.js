// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm6Oe6rBqTMdBmga_41QB9qQzrr3WJtJA",
  authDomain: "ets-vue.firebaseapp.com",
  databaseURL: "https://ets-vue-default-rtdb.firebaseio.com",
  projectId: "ets-vue",
  storageBucket: "ets-vue.appspot.com",
  messagingSenderId: "299657414646",
  appId: "1:299657414646:web:ab259b05082dcb45c769d7",
  measurementId: "G-JFVNV7YNER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectFirestore = firebase.firestore();
export { projectFirestore };