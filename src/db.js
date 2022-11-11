import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyCFBkIusKkxtospqmrZdhL56c_t5LoUaP0",
    authDomain: "firevuechat-2ec8c.firebaseapp.com",
    projectId: "firevuechat-2ec8c",
    storageBucket: "firevuechat-2ec8c.appspot.com",
    messagingSenderId: "75732185142",
    appId: "1:75732185142:web:07398b3a75726368796897"
}

const db = firebase.initializeApp(config);
export default db;
