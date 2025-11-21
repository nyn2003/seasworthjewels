import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxMCIM3r0QSbLozeVS42Olqgv3E4URpzg",
  authDomain: "seasworth.firebaseapp.com",
  projectId: "seasworth",
  storageBucket: "seasworth.firebasestorage.app",
  messagingSenderId: "352793487050",
  appId: "1:352793487050:web:8bf5b0acb8b8ef4ccef633",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
