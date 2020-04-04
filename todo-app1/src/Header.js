import React, { Component } from 'react'
import firebase from './firebase'
import LoginOutButton from './LoginOutButton'
import {myPortalIconSrc} from './ImageUtil'
import './App.css'

class Header extends Component {
state= {
  user: null
}
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
}
toHomePage(){
  document.location.href='./Home'
}


render() {
  return (
    <div className="Header">
      <div className="Header-Left-Component">
        <img src={myPortalIconSrc()} style={{height:"100%",cursor:"pointer"}}
        onClick={this.toLogoutPage}/>
      </div>
      <div className="Header-Right-Component">
          <LoginOutButton style={{width:"100%",height:"100%"}}/>
          <div style={{clear:"both"}}/>
      </div>
    </div>

  )
}
}
export default Header
