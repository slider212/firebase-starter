import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCRpR2UkElEZJt5Zx6e981VV8djAP6g-EM",
  authDomain: "lewis1-8ee62.firebaseapp.com",
  databaseURL: "https://lewis1-8ee62.firebaseio.com",
  projectId: "lewis1-8ee62",
  storageBucket: "lewis1-8ee62.appspot.com",
  messagingSenderId: "251943819349",
  appId: "1:251943819349:web:b60fbee4e0f9f32425dcdc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const f = firebase;
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage();