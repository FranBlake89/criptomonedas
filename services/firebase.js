import * as firebase from "firebase"
import 'firebase/firebase-firestore'

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgUhMz2nKLdazWorwz_ms-nFOYKX1evDM",
    authDomain: "cripto-5c518.firebaseapp.com",
    projectId: "cripto-5c518",
    storageBucket: "cripto-5c518.appspot.com",
    messagingSenderId: "744494104012",
    appId: "1:744494104012:web:30e86fa7e14182634ab169"
  }


class Firebase {
    constructor(){
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth()
    }

    login = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password)

    }

    createUser = async (name, user, password) => {
        await this.auth.createUserWithEmailAndPassword (user, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })

    }

    getUser = () =>{
        return this.auth.currentUser.displayName
    }

}


const firebaseService = new Firebase()

export default firebaseService