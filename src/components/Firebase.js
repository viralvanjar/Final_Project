// Importing required dependency for firestore database
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import {getFirestore} from "firebase/firestore"

// Createing the const variable for firestore database
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASq_vV-Eh2ldPuMMyMtvIbC0xwjqMuZ_4",
  authDomain: "my-portfolio-website-faf4b.firebaseapp.com",
  projectId: "my-portfolio-website-faf4b",
  storageBucket: "my-portfolio-website-faf4b.appspot.com",
  messagingSenderId: "308131991355",
  appId: "1:308131991355:web:f58b0ed5c95f0eae6b711e"
});

// Createing the const variable of database for feedback from
const db = getFirestore(firebaseApp);

export { db };