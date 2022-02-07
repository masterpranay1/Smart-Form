/* ************************************************ */
/* importing firebase and its services from its cdn */
/* ************************************************ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

/* *********************************************** */
/* config object form the firebase project console */
/* *********************************************** */

const config = {
  apiKey: "AIzaSyCYCXCOomXcISaRi73kYdFvU3nIppYBAOQ",
  authDomain: "form-validator-masterpra-b1daf.firebaseapp.com",
  projectId: "form-validator-masterpra-b1daf",
  storageBucket: "form-validator-masterpra-b1daf.appspot.com",
  messagingSenderId: "978605130903",
  appId: "1:978605130903:web:9f032673fa99c4e9c015d2",
};

// Initialize Firebase
const app = initializeApp(config);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore();

/* **************************** */
/* callback for singin / signup */
/* **************************** */

export const googleSignIn = () => {
  localStorage.setItem("signIn", "true");
  signInWithRedirect(auth, provider);
};

/* *************************************************** */
/* function to get the user data after the redirection */
/* *************************************************** */

export const getData = async () => {
  if (localStorage.getItem("signIn")) alert("Loading!! please wait");
  localStorage.removeItem("signIn");
  return getRedirectResult(auth).then((result) => {
    if (result) {
      return result.user;
    }
  });
};

/* ******************************************************************************** */
/* function to create and fetch User Data of signup/signin using email and password */
/* ******************************************************************************** */

export const createUser = (user) => {
    return createUserWithEmailAndPassword(auth, user.email, user.password);
}
export const fetchUser = (user) => {
    return signInWithEmailAndPassword(auth, user.email, user.password);
}

export const addUserNameAndId = (id, userName) => {
    addDoc(collection(db, "users"), {
        id : id,
        name : userName
    })
}

export const getUserName = () => {
    return getDocs(collection(db, "users"));
}