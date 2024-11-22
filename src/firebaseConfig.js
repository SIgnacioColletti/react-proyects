import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0lyZxZg7vTpmYIuZbzbh-gOl_xNMhLvk",
  authDomain: "backend-club6.firebaseapp.com",
  projectId: "backend-club6",
  storageBucket: "backend-club6.firebasestorage.app",
  messagingSenderId: "877125287262",
  appId: "1:877125287262:web:80f0ce17e7d225da76a3cf",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
