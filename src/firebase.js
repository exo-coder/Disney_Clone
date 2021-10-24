// Import the functions you need from the SDKs you need
// this is the V-8 of firebase
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBKcRiveoRbA6WWTAcoYc-d2Bn1mNUqaUc",
  authDomain: "disney-plus-clone-9a7e9.firebaseapp.com",
  projectId: "disney-plus-clone-9a7e9",
  storageBucket: "disney-plus-clone-9a7e9.appspot.com",
  messagingSenderId: "485697025237",
  appId: "1:485697025237:web:ccd2af6525efa02e769e5c",
  measurementId: "G-SRQ70EG3GR"
};

// Initialize Firebase
const initializeFirebase = initializeApp(firebaseConfig);
export default initializeFirebase;