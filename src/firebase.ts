// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvJrjDe1REQfrPybE7MRJnuoaOqZVDmnY",
  authDomain: "skybound-mi-web.firebaseapp.com",
  projectId: "skybound-mi-web",
  storageBucket: "skybound-mi-web.appspot.com",
  messagingSenderId: "1272611986",
  appId: "1:1272611986:web:5ea042f4fbae2dd222924b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
