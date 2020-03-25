import React, { Component } from 'react'
import firebase from './firebase'

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
    <div className="App">
    <div className="App-intro" style={{textAligin:"right",display:"block"}}>
      <button onClick={this.logout} style={{color:"red",float:"right"}} >Google Logout</button>
    </div>
    <div className="Home" style={{display:"block",clear:"both"}}>
      It's Home Space
    </div>
    </div>
  )
}
}
export default Home;
