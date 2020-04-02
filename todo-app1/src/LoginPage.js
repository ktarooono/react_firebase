import React, { Component } from 'react'
import firebase from './firebase'
import {withRouter} from 'react-router-dom';

import googleLoginIcon from './Images/google/google_icons/google_icon.png'
class LoginPage extends Component {
  state = {
    user: null
  }

componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ user })
  })
}

contructor(props){
  this.super(props);
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
    <div className="login conteiner">
    <a href="#" className="btn login original" onClick={this.login} >
      <div className="btnContainer login">
         <span>ログイン</span>
      </div>
    </a>
    <div className="login invisible">――――or―――――</div>
    <p className="App-intro">
    {this.state.user? "UID:":""} {this.state.user && this.state.user.uid}
       </p>

    <a href="#" className="btn login google" onClick={this.login} >
      <div className="btnContainer login">
         <img className="sns-icon"
         src={googleLoginIcon} alt="GoogleIcon"/>
         <span>Google ログイン</span>
      </div>
    </a>
    <br/>
    <a href="#" className="btn login faceBook">
      <div className="btnContainer login">
         <span class="fab fa-facebook-square sns-icon"></span>
         <span>FaceBook ログイン</span>
      </div>
    </a>
    <br/>
    <a href="#" className="btn login twitter">
      <div className="btnContainer login">
      <span class="fab fa-twitter-square sns-icon"></span>
         <span>Twitter ログイン</span>
      </div>
    </a>

    </div>
  )
}
}
export default withRouter(LoginPage);
