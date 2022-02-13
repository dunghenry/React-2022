// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDxR5OhGtF98VjIA5EiTNqxrF8CAxba8DI",
  authDomain: "react-todos-a2e29.firebaseapp.com",
  databaseURL: "https://react-todos-a2e29-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-todos-a2e29",
  storageBucket: "react-todos-a2e29.appspot.com",
  messagingSenderId: "74569937157",
  appId: "1:74569937157:web:bcbd9fd10ab0fdd075076c"
};
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);