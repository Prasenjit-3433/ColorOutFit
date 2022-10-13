// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);