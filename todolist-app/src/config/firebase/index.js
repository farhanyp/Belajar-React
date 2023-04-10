// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTtNlWODW4n1AAV1_7tqL4b7PdGjBHllA",
  authDomain: "todolist-app-cc47a.firebaseapp.com",
  projectId: "todolist-app-cc47a",
  storageBucket: "todolist-app-cc47a.appspot.com",
  messagingSenderId: "76463543073",
  appId: "1:76463543073:web:8de7c2059559c50b32e460",
  databaseURL: "https://todolist-app-cc47a-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app)

export default app