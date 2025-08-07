import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDv5G-RwB4i_IG2ApN2GA9S85G2qsAqdno",
  authDomain: "fun-game-d6a4f.firebaseapp.com",
  projectId: "fun-game-d6a4f",
  storageBucket: "fun-game-d6a4f.firebasestorage.app",
  messagingSenderId: "607287040407",
  appId: "1:607287040407:web:7d59f289aebd05544fccd2",
  measurementId: "G-4NW7REJ6S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Register user function
export const registerUser = async (email: string, password: string, username: string, country: string, referrer: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data to Firestore
    const referralLink = `https://10dollar.fun/?ref=${username}`;
    const userData = { username, country, email, referrer, referralLink };
    await setDoc(doc(db, "users", user.uid), userData);

    return { ...user, referralLink }; // <-- Bas yahi return rakhain
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

// Login user function
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Returns the logged-in user object
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Propagate the error to be caught in the component
  }
};

export { db, addDoc, collection, sendEmailVerification };
