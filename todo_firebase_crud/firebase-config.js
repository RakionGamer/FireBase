// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu8E4OiAMn2BuYUZLmHDPn-ymmz80VX_0",
  authDomain: "crudelectiva-22d98.firebaseapp.com",
  projectId: "crudelectiva-22d98",
  storageBucket: "crudelectiva-22d98.appspot.com",
  messagingSenderId: "885197819334",
  appId: "1:885197819334:web:a24a4fbda273e698df36c7"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
