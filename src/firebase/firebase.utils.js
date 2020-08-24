import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCji3NmYJcOPBenDM4cUy-2lDITLzteSA8",
  authDomain: "clothing-commerce.firebaseapp.com",
  databaseURL: "https://clothing-commerce.firebaseio.com",
  projectId: "clothing-commerce",
  storageBucket: "clothing-commerce.appspot.com",
  messagingSenderId: "398022634966",
  appId: "1:398022634966:web:938f7ac19b1ce7d9a28877",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error created users", error.message);
    }
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
