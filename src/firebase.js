import firebase from "firebase/app";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCMtW2AqoRWontXFTvLAcr6t3-7OlkYgzg",
  authDomain: "vuejs-test-c04e5.firebaseapp.com",
  projectId: "vuejs-test-c04e5",
  storageBucket: "vuejs-test-c04e5.appspot.com",
  messagingSenderId: "956100710301",
  appId: "1:956100710301:web:a4de3db7ebd70149696974",
  measurementId: "G-BVTPV365X7"
};

firebase.initializeApp(config);

export default firebase.database();
