import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWKeP2LSFBZgG4LbXl5Hvp5UHUW035628",
  authDomain: "the-blog-9c900.firebaseapp.com",
  projectId: "the-blog-9c900",
  storageBucket: "the-blog-9c900.appspot.com",
  messagingSenderId: "110246040577",
  appId: "1:110246040577:web:4eacd9dc7ded52e7cd1c00",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
