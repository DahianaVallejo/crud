import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD_AH4WXrkhkUp7zziCXi5nRSEdkX9o8dc",
    authDomain: "crud-dd304.firebaseapp.com",
    projectId: "crud-dd304",
    storageBucket: "crud-dd304.appspot.com",
    messagingSenderId: "499287960051",
    appId: "1:499287960051:web:975e53f2f0c0d9c521ca86"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)