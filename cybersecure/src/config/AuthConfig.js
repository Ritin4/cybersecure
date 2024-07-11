// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2jfdyjmF0xvsmFQ7sjFoyg5WfN1F0M10",
  authDomain: "cyber-ac160.firebaseapp.com",
  projectId: "cyber-ac160",
  storageBucket: "cyber-ac160.appspot.com",
  messagingSenderId: "1026775950995",
  appId: "1:1026775950995:web:d8bec6c5bfb02f6941cf66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app