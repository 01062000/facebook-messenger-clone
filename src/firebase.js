/** @format */

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAE74mQcONHq2_mJ4hp19xRTMsOhB2rK-E",
  authDomain: "facebook-messenger-clone-9bb15.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-9bb15.firebaseio.com",
  projectId: "facebook-messenger-clone-9bb15",
  storageBucket: "facebook-messenger-clone-9bb15.appspot.com",
  messagingSenderId: "844602430447",
  appId: "1:844602430447:web:e53412bd9ee9fb2d6f1c1a",
  measurementId: "G-6ZZ12F72PQ",
});

const db = firebaseApp.firestore();

export default db;
