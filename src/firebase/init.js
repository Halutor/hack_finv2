import firebase from 'firebase'
import firestore from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyD4LsLXhmWzaizd7dMfIgqbqc_OWwacNy8",
    authDomain: "proyecto-idat-c7515.firebaseapp.com",
    projectId: "proyecto-idat-c7515",
    storageBucket: "proyecto-idat-c7515.appspot.com",
    messagingSenderId: "102044222488",
    appId: "1:102044222488:web:75baa99c3dc883840b2f6d",
    measurementId: "G-WYBH7QGWSP"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  export default firebaseApp.firestore();