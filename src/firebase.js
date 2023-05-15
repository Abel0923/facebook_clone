import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBgxNdK89dJyX7ymi7vDI4BXyhrt0CxxM",
  authDomain: "fb-clone-41c21.firebaseapp.com",
  databaseURL: "https://fb-clone-41c21.firebaseio.com",
  projectId: "fb-clone-41c21",
  storageBucket: "fb-clone-41c21.appspot.com",
  messagingSenderId: "402171576742",
  appId: "1:402171576742:web:6c8ec8fc8f8bbfdf0e8f67",
  measurementId: "G-EXYYLNN02S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
