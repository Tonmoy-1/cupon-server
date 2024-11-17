// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUs6A_oYwGY8Bd2qKFtU6wm3cq-CrDrcw",
  authDomain: "discount-pro-e61ca.firebaseapp.com",
  projectId: "discount-pro-e61ca",
  storageBucket: "discount-pro-e61ca.firebasestorage.app",
  messagingSenderId: "824288855101",
  appId: "1:824288855101:web:76f3dbf1b23133d192d654",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
