import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {firebaseConfig} from '../keys'


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createOrGetUser = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email, phoneNumber } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          phoneNumber,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }else{

    }
  
    return userRef;
  };


export default firebase;