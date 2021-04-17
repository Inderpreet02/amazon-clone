import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFZU-5LOFfxBV26DXIJ7yz2dNcoLgezQQ",
    authDomain: "clone-f3ad6.firebaseapp.com",
    projectId: "clone-f3ad6",
    storageBucket: "clone-f3ad6.appspot.com",
    messagingSenderId: "612566167819",
    appId: "1:612566167819:web:0c47129617247e30a1f20e",
    measurementId: "G-KGMXS9WS3Y"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
