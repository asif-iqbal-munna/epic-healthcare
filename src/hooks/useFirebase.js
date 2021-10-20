import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
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
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const manuallySignUp = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const manualSignIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log(user);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
  }, []);

  const setUserName = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    signInWithGoogle,
    error,
    setError,
    logOut,
    manuallySignUp,
    manualSignIn,
    setUserName,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
