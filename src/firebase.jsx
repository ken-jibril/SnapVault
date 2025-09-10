import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_E4BKaWF1KiBuHB6tFdZV0YxjRkhpQhM",
  authDomain: "ken-photo-share-demo.firebaseapp.com",
  projectId: "ken-photo-share-demo",
  storageBucket: "ken-photo-share-demo.firebasestorage.app",
  messagingSenderId: "920419936420",
  appId: "1:920419936420:web:fc5428cc48574d1ac71e31",
  measurementId: "G-0R4RD3649S"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);