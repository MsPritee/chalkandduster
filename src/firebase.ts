// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Ijt4aKME3UwQheB8AuC37e-55o-xOQM",
  authDomain: "chalkandduster-kbb.firebaseapp.com",
  projectId: "chalkandduster-kbb",
  storageBucket: "chalkandduster-kbb.firebasestorage.app",
  messagingSenderId: "203394036429",
  appId: "1:203394036429:web:f904273c030c13d723ef84",
  measurementId: "G-T9B9KFQXLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);