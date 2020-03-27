import React, { Component } from 'react'
import firebase from './firebase'
import {Button} from '@material-ui/core'

import googleLoginIcon from './Images/google/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png'
class LoginOutButton extends Component {
  state = {
    user: null,
    style:""
  }

  constructor(props){
    super(props);

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
  console.log("this")
  return (
    <div className="LoginOutButton" style={this.props.style}>
    {this.state.user?
      <Button variant="contained" color="primary" onClick={this.logout} style={{cursol:"pointer"}} >Logout</Button>
      :<Button variant="contained" color="primary" onClick={this.login} style={{cursol:"pointer"}} >Login</Button>
    }
     </div>
  )
}
}
export default LoginOutButton;
