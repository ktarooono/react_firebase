import React, { Component } from 'react'
import firebase from './firebase'
import LoginOutButton from './LoginOutButton'
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

render() {
  return (
    <div className="Header">
      <LoginOutButton style={{float:"right"}}/>
    <div style={{clear:"both"}}/>
    </div>

  )
}
}
export default Header
