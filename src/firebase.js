import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAEKuAcsPi3fYcjr3_WCczmeuD-uXWXvZg",
    authDomain: "wposts.firebaseapp.com",
    projectId: "wposts",
    storageBucket: "wposts.appspot.com",
    messagingSenderId: "526356329334",
    appId: "1:526356329334:web:1711fc71b05720573ac057",
    measurementId: "G-WHPDND0REJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            resolve(user)
        }, reject)
    });
}
export const db = firebase.firestore();
export { auth, firebase};