import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyChOshvMQoLodJnIzNCoQH8r5BXaV9BP04",
    authDomain: "react2025-59185.firebaseapp.com",
    projectId: "react2025-59185"
  });
}

export default firebase