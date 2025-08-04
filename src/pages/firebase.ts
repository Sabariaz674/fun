import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore, doc, setDoc,addDoc,collection } from "firebase/firestore";

// Your Firebase config
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

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Firebase functions
export const registerUser = async (email: string, password: string, username: string, country: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save additional user data (e.g., username, country) in Firestore
    await setDoc(doc(db, "users", user.uid), {
      username,
      country,
      email,
    });

    // Send email verification to the user
    await sendEmailVerification(user);
    console.log('Verification email sent to:', user.email);

    return user;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
export { db };
export{addDoc,collection}
