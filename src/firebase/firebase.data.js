import {firestore} from './firebase.utils';

export const getUserPosts = (user) =>{
    return firestore.doc(user.uid).col('posts').get();
}
    
