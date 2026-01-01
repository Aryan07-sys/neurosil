import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5s6prt6Ueon9kbAzuYkWFPacfBJkCVqQ",
  authDomain: "neurosil-ai-techno.firebaseapp.com",
  projectId: "neurosil-ai-techno",
  storageBucket: "neurosil-ai-techno.firebasestorage.app",
  messagingSenderId: "229172645008",
  appId: "1:229172645008:web:9c1056867e572d7b719c15",
  measurementId: "G-LTHV9EK271"
};
const app = initializeApp(firebaseConfig);

/* ✅ EXPORT DATABASE */
export const db = getFirestore(app);

/* ✅ EXPORT ANALYTICS SAFELY (Vite fix) */
export let analytics: any = null;

isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});
