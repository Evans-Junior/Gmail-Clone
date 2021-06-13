import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyCtxAGW_7eo-JTRycc6vJmdwaudnY9ufSs",
    authDomain: "clone-c7e2a.firebaseapp.com",
    projectId: "clone-c7e2a",
    storageBucket: "clone-c7e2a.appspot.com",
    messagingSenderId: "12539832615",
    appId: "1:12539832615:web:9d7b3053a7ab7eacaba102"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};