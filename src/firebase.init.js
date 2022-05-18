// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb2nx8-DtJ2LihNrbtDJ1Ah8d6Sh0LkqQ",
  authDomain: "todo-task-41603.firebaseapp.com",
  projectId: "todo-task-41603",
  storageBucket: "todo-task-41603.appspot.com",
  messagingSenderId: "370908723639",
  appId: "1:370908723639:web:a0e1998b1996b35ea31032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;