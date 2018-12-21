import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAU-mVOMhwIgo1Mm8Fcpnpvgp5xDSqZMG4",
  authDomain: "tic-tac-toe-62857.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-62857.firebaseio.com",
  projectId: "tic-tac-toe-62857",
  storageBucket: "tic-tac-toe-62857.appspot.com",
  messagingSenderId: "829174021325"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase