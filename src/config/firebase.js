import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firebase-auth'


//  CHAT APPPP
var firebaseConfig = {
    apiKey: "AIzaSyATUeP_ChfAkQ8d5JT61rtnxNB4Ajhuj64",
    authDomain: "react-redux-chatapp-bb584.firebaseapp.com",
    databaseURL: "https://react-redux-chatapp-bb584.firebaseio.com",
    projectId: "react-redux-chatapp-bb584",
    storageBucket: "react-redux-chatapp-bb584.appspot.com",
    messagingSenderId: "44406606561",
    appId: "1:44406606561:web:0aa2affc08ac9cb9c645a0",
    measurementId: "G-WGGDBJC0ML"
  };
  // Initialize Firebase
var Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase