import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import {apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId} from '../keys'

var firebaseConfig = {
    apiKey: "AIzaSyD1D-EilbWpv2YqedEqcM5HpJu3DIS7Wx0",
    authDomain: "find-it-overseas.firebaseapp.com",
    databaseURL: "https://find-it-overseas.firebaseio.com",
    projectId: "find-it-overseas",
    storageBucket: "find-it-overseas.appspot.com",
    messagingSenderId: "137365469546",
    appId: "1:137365469546:web:587502d90a0a1a8c"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;