import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3EGRrYue_dwIprfWpgb5XeG7bkesowcM",
  authDomain: "challenge-fe366.firebaseapp.com",
  projectId: "challenge-fe366",
  storageBucket: "challenge-fe366.appspot.com",
  messagingSenderId: "566001804625",
  appId: "1:566001804625:web:d9d1ec6dbf40d0622d1f70",
  measurementId: "G-0ML4982FSZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };