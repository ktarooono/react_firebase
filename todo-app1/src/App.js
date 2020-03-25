import React, { Component } from 'react'
import firebase from './firebase'
import Login from './Login'
import Home from './Home'
import './App.css'

class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }
  render() {
    return (
      <div className="App">
    {this.state.user ? <Home/>
        :<Login/>}
      </div>
    )
  }
}
export default App
