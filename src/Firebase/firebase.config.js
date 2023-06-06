// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZDGGbumnhnQRlM7n0rI9uZEJJLEwjPuY",
  authDomain: "camp-champions-school.firebaseapp.com",
  projectId: "camp-champions-school",
  storageBucket: "camp-champions-school.appspot.com",
  messagingSenderId: "449673510152",
  appId: "1:449673510152:web:aad670aaac875797d500bd",
  measurementId: "G-57WPZMFBF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);