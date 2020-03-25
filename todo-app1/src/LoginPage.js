import React, { Component } from 'react'
import firebase from './firebase'

import googleLoginIcon from './Images/google/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png'
class LoginPage extends Component {
  state = {
    user: null
  }

componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ user })
  })
}

login() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

logout() {
  firebase.auth().signOut()
}

render() {
  return (
    <div className="login">
    <p className="App-intro">
    {this.state.user? "UID:":""} {this.state.user && this.state.user.uid}
       </p>
     <img src={googleLoginIcon} alt="GoogleloginIcon" style={{width:"200px"}}
     onClick={this.login} />
    </div>
  )
}
}
export default LoginPage;
