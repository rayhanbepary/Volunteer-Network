import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


export const initializeLoginFramework = () => {
    if( firebase.apps.length === 0 ){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then( res => {
        const {displayName,email} = res.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            success: true
        }
        return signedInUser;
    })
    .catch( error => {
        console.log(error);
        console.log(error.code);
        console.log(error.message);
        console.log(error.email);
        console.log(error.credential);
    });
}

export const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
    .then( idToken => {
       sessionStorage.setItem('token', idToken);
    })
    .catch( err => console.log(err));
}