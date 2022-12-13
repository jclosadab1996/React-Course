// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEEEI-V7kEg-qN0EOFr7I1D9lPoDmjIFY",
  authDomain: "react-cursos-a82a8.firebaseapp.com",
  projectId: "react-cursos-a82a8",
  storageBucket: "react-cursos-a82a8.appspot.com",
  messagingSenderId: "602119974177",
  appId: "1:602119974177:web:8c307de943b138ca692260",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
