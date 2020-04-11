import React, { Component } from 'react'
import firebase from './firebase'
import LoginOutButton from './LoginOutButton'
import {Tabs,Tab} from '@material-ui/core'
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
        <img src={myPortalIconSrc()}
        onClick={this.toLogoutPage} className="Header site-logo"/>

        <Tabs className="Header-tabs"value={"value"} onChange={() => {}} aria-label="simple tabs example">
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three" />
        </Tabs>

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
