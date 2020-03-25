import React, { Component } from 'react'
import firebase from './firebase'
import LoginPage from './LoginPage'
import Home from './Home'
import Header from './Header'
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
        <Header/>
    {this.state.user ? <Home/>
        :<LoginPage/>}
      </div>
    )
  }
}
export default App
