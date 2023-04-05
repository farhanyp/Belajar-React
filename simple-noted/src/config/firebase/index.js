
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjL_1lASgtHEP1MqabsuE3dRDIjYjNoTg",
  authDomain: "simple-noted-firebase-a8121.firebaseapp.com",
  projectId: "simple-noted-firebase-a8121",
  storageBucket: "simple-noted-firebase-a8121.appspot.com",
  messagingSenderId: "335866838900",
  appId: "1:335866838900:web:ae6724dc994f4e9dc1b621",
  measurementId: "G-0318YWWVM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app