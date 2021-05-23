import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBa8TLK-sSrS_zQ6c1dBWIi2xbQmywT3ic",
  authDomain: "linkedin-clone-9157c.firebaseapp.com",
  projectId: "linkedin-clone-9157c",
  storageBucket: "linkedin-clone-9157c.appspot.com",
  messagingSenderId: "1026768885223",
  appId: "1:1026768885223:web:d402bda37d392191729942",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
