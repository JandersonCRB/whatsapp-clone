import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from 'firebase';

import Main from './Main/Main';

class App extends Component {
  state = {
    user: null,
  }
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDgq63qfEMuU6eR7-U-r1OtEOuGt_H16MU",
      authDomain: "whatsapp-clone-f8371.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-f8371.firebaseio.com",
      projectId: "whatsapp-clone-f8371",
      storageBucket: "whatsapp-clone-f8371.appspot.com",
      messagingSenderId: "244554863163"
    };
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(_ => {
        firebase.auth().signInWithPopup(provider).then(result => {
          const { uid, photoURL, displayName, email, emailVerified } = result.user;
          const user = {
            uid,
            photoURL,
            displayName,
            email,
            emailVerified,
          }
          this.setState({ user });
          const db = firebase.firestore();
          db.collection("users").doc(uid).set(user)
            .then(_ => {
              console.log('Signed in');
            })
            .catch(error => {
              console.error("Error writing document: ", error);
            })
        }).catch(function(error) {
          console.error(error);
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        console.error(error)
      });
    const provider = new firebase.auth.GoogleAuthProvider();
  }
  
  render() {
    const { user } = this.state;
    return (
      <>
        <CssBaseline />
        <Main user={user}/>
      </>
    );
  }
}

export default App;
