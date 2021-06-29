import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyA8KkjHJVM3LUTFtOWOWXwq4Vm4UKKmX18",
  authDomain: "crwn-clothing-a28b2.firebaseapp.com",
  projectId: "crwn-clothing-a28b2",
  storageBucket: "crwn-clothing-a28b2.appspot.com",
  messagingSenderId: "639041143924",
  appId: "1:639041143924:web:d836fce98da105c6e17d21",
  measurementId: "G-82FGJLNNLW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log(error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
