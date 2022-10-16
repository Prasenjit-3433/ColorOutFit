// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9eK9Uw0-PEhpgn33B9fq3qR2ryYTWuAI",
    authDomain: "crwn-clothing-db-a197f.firebaseapp.com",
    projectId: "crwn-clothing-db-a197f",
    storageBucket: "crwn-clothing-db-a197f.appspot.com",
    messagingSenderId: "497574241574",
    appId: "1:497574241574:web:3c7d54932172d966a5cde7"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if (!userAuth) return;

    // Check if there's an existing document reference inside this database instance
    const userDocRef = doc(db, 'users', userAuth.uid);

    // Now pass that document reference into getDoc to check if there's any instance of that reference:
    const userSnapshot = await getDoc(userDocRef);
 
    // if user data does not exist
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      // create or set the document with the data from userAuth in my collection
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
    
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email | !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email | !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }