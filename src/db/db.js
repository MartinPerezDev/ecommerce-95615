import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3Ygd_8-1D-lh8IXBzShPzPJaIvwCGQuM",
  authDomain: "ecommerce-95615.firebaseapp.com",
  projectId: "ecommerce-95615",
  storageBucket: "ecommerce-95615.firebasestorage.app",
  messagingSenderId: "168248645540",
  appId: "1:168248645540:web:77e493ae8e7e906b515331"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;