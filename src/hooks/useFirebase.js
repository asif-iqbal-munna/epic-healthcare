import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";

firebaseInitialization();

const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const manuallySignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const manualSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser({});
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    signInWithGoogle,
    error,
    setError,
    logOut,
    manuallySignUp,
    manualSignIn,
  };
};

export default useFirebase;
