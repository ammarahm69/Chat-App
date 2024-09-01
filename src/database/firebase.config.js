// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyB1WMgW0jMsWJBNSKcCYN0F4FdvjiDz7eE",
  authDomain: "fir-e7ffb.firebaseapp.com",
  projectId: "fir-e7ffb",
  storageBucket: "fir-e7ffb.appspot.com",
  messagingSenderId: "361643856203",
  appId: "1:361643856203:web:031b2c0e2b059963c4d8ce",
  measurementId: "G-8QTPDQHG73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth , app };
