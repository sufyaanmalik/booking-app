import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , sendSignInLinkToEmail} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqWtWjLTukW-z8QUxSTA3B97Gneumq-sI",
  authDomain: "booking-app-3ee1c.firebaseapp.com",
  projectId: "booking-app-3ee1c",
  storageBucket: "booking-app-3ee1c.firebasestorage.app",
  messagingSenderId: "991651225884",
  appId: "1:991651225884:web:7d4066563bd3be01105ad9",
  measurementId: "G-2FFNSF0THE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail

}
