
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxvXXLIFBJO2qDDS6yW_foh8JEBQd8ucU",
  authDomain: "app-ekomart.firebaseapp.com",
  projectId: "app-ekomart",
  storageBucket: "app-ekomart.firebasestorage.app",
  messagingSenderId: "901885386064",
  appId: "1:901885386064:web:752a0489b8b6491653e055",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app);
