// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEXRpWtC3EWVMWvgTd5vxVCeEdiwCSreM",
  authDomain: "auth-moha-milon-753db.firebaseapp.com",
  projectId: "auth-moha-milon-753db",
  storageBucket: "auth-moha-milon-753db.firebasestorage.app",
  messagingSenderId: "865375632954",
  appId: "1:865375632954:web:07b3e2d6bcdc679a11bf03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;