// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCHsjXfvsI4aHuZNKmAIfbYL4EcfSNMQTc",
    authDomain: "crwn-db-be957.firebaseapp.com",
    projectId: "crwn-db-be957",
    storageBucket: "crwn-db-be957.appspot.com",
    messagingSenderId: "107370422725",
    appId: "1:107370422725:web:f3958aa7a9e2872069ebac",
    measurementId: "G-TRNCT2KN4T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
