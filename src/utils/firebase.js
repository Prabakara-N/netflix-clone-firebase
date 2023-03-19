// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWbjPngHttD3IJ6o9N8Sfl5wQjaKKSfyg",
  authDomain: "react-netflix-clone-a022a.firebaseapp.com",
  projectId: "react-netflix-clone-a022a",
  storageBucket: "react-netflix-clone-a022a.appspot.com",
  messagingSenderId: "1024030996361",
  appId: "1:1024030996361:web:b5d7eed54dc1036173d358",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
