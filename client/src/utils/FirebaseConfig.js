import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCo9bTqnC88T0gVr2Ly1Ja4WpaqEuZxeUA",
    authDomain: "whatup-24d57.firebaseapp.com",
    projectId: "whatup-24d57",
    storageBucket: "whatup-24d57.appspot.com",
    messagingSenderId: "1000661030200",
    appId: "1:1000661030200:web:d240b8745deec8b6539dcd"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);