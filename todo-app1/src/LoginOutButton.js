import React, { Component } from 'react'
import firebase from './firebase'

import googleLoginIcon from './Images/google/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png'
class LoginOutButton extends Component {
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
    <div className="LoginOutButton">
    {this.state.user?
      <button onClick={this.logout} style={{color:"red",float:"right"}} >Logout</button>
      :<button onClick={this.login} style={{color:"red",float:"right"}} >Login</button>
    }
     </div>
  )
}
}
export default LoginOutButton;
