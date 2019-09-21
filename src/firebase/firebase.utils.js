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

export const createOrGetUser = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email, phoneNumber} = userAuth;
        const {providerId} = userAuth.providerData[0];
        const createdAt = new Date();
        console.log(additionalData);
        try{
            if(additionalData.displayName){
                await userRef.set({
                    email, phoneNumber, createdAt, providerId, ...additionalData
                })
            }else{
                await userRef.set({
                    displayName, email, phoneNumber, createdAt, providerId, ...additionalData
                })
            }
            
        }catch(e){
            console.log('error in creating user',e.message)
        }
    }
    return userRef;

}


export default firebase;