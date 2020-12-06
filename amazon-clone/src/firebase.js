import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_r-mF_m9KvJOldKzOpsrbxJX6nWxLODE",
  authDomain: "clone-93db3.firebaseapp.com",
  databaseURL: "https://clone-93db3.firebaseio.com",
  projectId: "clone-93db3",
  storageBucket: "clone-93db3.appspot.com",
  messagingSenderId: "621972127674",
  appId: "1:621972127674:web:94cc4f03d53796695a2783"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
