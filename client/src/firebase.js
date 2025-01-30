// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "zaawadi-homes.firebaseapp.com",
  projectId: "zaawadi-homes",
  storageBucket: "zaawadi-homes.firebasestorage.app",
  messagingSenderId: "199104214762",
  appId: "1:199104214762:web:302c017c790291a786c993"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

