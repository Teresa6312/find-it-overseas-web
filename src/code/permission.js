import {firestore} from './../firebase/firebase.utils';

export const verifyUser = (reference, userId) =>{
    const userRef = firestore.doc(`users/${userId}`);
    return reference===userRef
}