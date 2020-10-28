import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBcNo2lBb5DWYAXEiSHWW46RD0JX-Ke0iE",
    authDomain: "marioplan-4c3a6.firebaseapp.com",
    databaseURL: "https://marioplan-4c3a6.firebaseio.com",
    projectId: "marioplan-4c3a6",
    storageBucket: "marioplan-4c3a6.appspot.com",
    messagingSenderId: "126639819704",
    appId: "1:126639819704:web:c5930147e10697bdd65d4d",
    measurementId: "G-SDX2L33R73"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  

  export default firebase;