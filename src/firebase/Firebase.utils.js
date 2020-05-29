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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
