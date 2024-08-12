// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOtyL2qk55HjToJ2Ie0lzLXAyS12VqPvY",
  authDomain: "pantry-app-1c11b.firebaseapp.com",
  projectId: "pantry-app-1c11b",
  storageBucket: "pantry-app-1c11b.appspot.com",
  messagingSenderId: "449392977638",
  appId: "1:449392977638:web:692881ec78cded0e34fd27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { app, firestore };
