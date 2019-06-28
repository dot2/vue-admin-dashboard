import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBjfQAwifIsahvcrK-zIMoSj0nzch_ZdIE",
    authDomain: "vue-test-1da0f.firebaseapp.com",
    databaseURL: "https://vue-test-1da0f.firebaseio.com",
    projectId: "vue-test-1da0f",
    storageBucket: "vue-test-1da0f.appspot.com",
    messagingSenderId: "1002668847740",
    appId: "1:1002668847740:web:df96b7530cb3832e"
});

export const db = firebaseApp.firestore();