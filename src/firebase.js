import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD9bSC0mCeVT2id30mxLXQwabcZPeMA770",
    authDomain: "slack-clone-926b4.firebaseapp.com",
    databaseURL: "https://slack-clone-926b4-default-rtdb.firebaseio.com",
    projectId: "slack-clone-926b4",
    storageBucket: "slack-clone-926b4.appspot.com",
    messagingSenderId: "314774790725",
    appId: "1:314774790725:web:e1bd2a1d3d23b620dbf92c",
    measurementId: "G-NHNWM4L24J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {
    auth , provider
  };