import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDUXQuAqC5fXdM4pzje076Nyy-wd6QH0ik",
    authDomain: "chat-app-3a7ef.firebaseapp.com",
    projectId: "chat-app-3a7ef",
    storageBucket: "chat-app-3a7ef.appspot.com",
    messagingSenderId: "648368662085",
    appId: "1:648368662085:web:cff6dcef3db92a838fe52c",
    measurementId: "G-D5FC2QRB3J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
