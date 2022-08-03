// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCV58IuCc0WluwLLORyuzUsJhC70d3BNMw",
    authDomain: "clone-2e3e4.firebaseapp.com",
    projectId: "clone-2e3e4",
    storageBucket: "clone-2e3e4.appspot.com",
    messagingSenderId: "1004584719145",
    appId: "1:1004584719145:web:ba25a8210201c94bd5dd38",
    measurementId: "G-0ETDE4XY91"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth(); 


  export {db ,auth};