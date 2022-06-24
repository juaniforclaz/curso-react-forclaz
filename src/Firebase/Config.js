// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2utnIhj1XxIHz5NkgLMigJih6yPkDOsk",
    authDomain: "curso-react-forclaz.firebaseapp.com",
    projectId: "curso-react-forclaz",
    storageBucket: "curso-react-forclaz.appspot.com",
    messagingSenderId: "587208034736",
    appId: "1:587208034736:web:10b742d5678add3a84ae75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)