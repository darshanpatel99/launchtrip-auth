import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// This firebase.js keeps all the fuctions we need to work with firebase like
// pushing product to firebase, deleting item,changing item, authenticating people etc.

//This is the config settings we get from firebase website
//Click on the gear towards top left section Project Overview --> In General section and scroll down to see the changes

//development configuration

firebase.initializeApp({
    apiKey: "AIzaSyCzL_jJ2tCb7zw8ozPj8mcOnOTl10PEp6g",
    authDomain: "cargo-web-ecfe4.firebaseapp.com",
    databaseURL: "https://cargo-web-ecfe4.firebaseio.com",
    projectId: "cargo-web-ecfe4",
    storageBucket: "cargo-web-ecfe4.appspot.com",
    messagingSenderId: "694813121828",
    appId: "1:694813121828:web:3c06f0e884209d6d3f27b1",
    measurementId: "G-CETDJG42FH"
});

console.log('Firebase initialized');

export default firebase;