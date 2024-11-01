// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Correct import for storage
import { getAuth } from "firebase/auth"; // Import the getAuth function

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBODg6JLhmPv4i_Px8Vu2mJR8MACrT9pvg",
    authDomain: "pdf2llm.firebaseapp.com",
    projectId: "pdf2llm",
    storageBucket: "pdf2llm.firebasestorage.app",
    messagingSenderId: "269729537576",
    appId: "1:269729537576:web:33f72accd6c9c170489f1d",
    measurementId: "G-7V63W9354J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app); // Use getStorage correctly

// Initialize Firebase Authentication
const auth = getAuth(app); // Initialize the auth instance

// Export storage, auth, and app
export { storage, auth }; // Export the auth and storage instances
export default app; // Export the app instance as the default