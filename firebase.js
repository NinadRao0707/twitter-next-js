// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYqTsKNncAfQ4DJAnbqZyW7Sv00vFjTBk",
  authDomain: "twitter-next-js.firebaseapp.com",
  projectId: "twitter-next-js",
  storageBucket: "twitter-next-js.appspot.com",
  messagingSenderId: "79424234792",
  appId: "1:79424234792:web:fce13c4ec375880330dc1d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };