import React, { Component } from 'react';
import firebase from '../utils/firebase';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router';

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
  const btnStyles= {cursol:"pointer",height:"100%",backgroundColor:"transparent",borderRadius:"0px"};
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
