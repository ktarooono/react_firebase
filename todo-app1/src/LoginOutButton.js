import React, { Component } from 'react';
import firebase from './firebase';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router';

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

toLogoutPage(){
  document.location.href='./LoginPage'
}

render() {
  const btnStyles= {cursol:"pointer",height:"100%"};
  return (
    <div className="LoginOutButton" style={this.props.style}>
    {this.state.user?
      <Button variant="contained" color="primary" onClick={this.logout} style={btnStyles} >Logout</Button>
      :<Button variant="contained" color="primary" onClick={this.toLogoutPage} style={btnStyles} >Login</Button>
    }
     </div>
  )
}
}
export default LoginOutButton;
