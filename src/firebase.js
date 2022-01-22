// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export { auth, firebase };