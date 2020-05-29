import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDkMeUZnMuyMkHFhDB9qSbYvwxSOfYAINM',
  authDomain: 'crwn-db-38464.firebaseapp.com',
  databaseURL: 'https://crwn-db-38464.firebaseio.com',
  projectId: 'crwn-db-38464',
  storageBucket: 'crwn-db-38464.appspot.com',
  messagingSenderId: '1058024588470',
  appId: '1:1058024588470:web:c5847537958b5690f89217',
  measurementId: 'G-7D0GG97C2N',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();

  console.log(snapShop);

  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;