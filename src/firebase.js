import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtGTdPVCOSbs167wlYy8DTOR42ifqsrJU",
  authDomain: "social-app-1e35f.firebaseapp.com",
  projectId: "social-app-1e35f",
  storageBucket: "social-app-1e35f.appspot.com",
  messagingSenderId: "724365897561",
  appId: "1:724365897561:web:04853f163e3da5da342648",
  measurementId: "G-N4HGYL7Y9G",
  databaseURL: "https://social-app-1e35f-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
