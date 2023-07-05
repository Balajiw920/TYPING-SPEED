import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA_2IX5pyW2haZ5c40w8uFEnEPSYxfoC7I",
  authDomain: "typing-unit.firebaseapp.com",
  projectId: "typing-unit",
  storageBucket: "typing-unit.appspot.com",
  messagingSenderId: "192548419140",
  appId: "1:192548419140:web:54d272856c83c93a89ee11",
  measurementId: "G-7MC9EFP134"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();


export { auth, db };