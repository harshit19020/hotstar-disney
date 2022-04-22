// import firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyCZ0dH-aq0sLvGLCVJw4LYM7oSpPmYOSg4",
    authDomain: "hotstar-disney.firebaseapp.com",
    projectId: "hotstar-disney",
    storageBucket: "hotstar-disney.appspot.com",
    messagingSenderId: "739232749501",
    appId: "1:739232749501:web:ae7ca6ba9bb1d9b017a4d4"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // const db = app.firestore();

  export const auth = getAuth(app);
  export {db};