import React, { Component } from 'react'
import firebase from './firebase'
import {tanboSrc} from './ImageUtil'
import {Tabs,Tab} from '@material-ui/core';
class Home extends Component {
  state = {
    user: null
  }

componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ user })
  })
}


logout() {
  firebase.auth().signOut()
}

render() {
  return (
    <div className="Home" >
    <div className=""  style={{display:"inline-block"}}>
        <h1 style={{textAlign:"left"}}>It's React & Firebase Application!!</h1>
        <div className="Sentence">
        I'll create a app from following idea.<br/>
         ・TODO App<br/>
         ・SNS　App<br/>
         ・EC site<br/>
         ・Matching App<br/>
         ・Memo App<br/>
        </div>
    </div>
    </div>
  )
}
}
export default Home;
