import React, { Component } from 'react'
import firebase from '../utils/firebase'
import LoginOutButton from './LoginOutButton'
import PageTabs from './PageTabs'
import {Tabs,Tab} from '@material-ui/core'
import {myPortalIconSrc} from '../utils/ImageUtil'
import '../App.css'
import {actionType,addTax} from '../utils/reduxUtils'

class Header extends Component {
  state= {
    user: null,
    pages:[{label:'test'}]
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
          <PageTabs pages={this.state.pages}/>
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
