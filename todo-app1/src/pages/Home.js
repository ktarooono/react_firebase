import React, { Component } from 'react'
import firebase from '../utils/firebase'
import {Tabs,Tab} from '@material-ui/core'
import PageTabs from '../components/PageTabs'
import {connect} from 'react-redux'
import {actionType,addTax} from '../utils/ActionCreator'

class Home extends Component {
  state = {
    user: null,
    price:0
  }
  constructor(props){
    super(props);
    this.state.price = this.props.price;
    this.state.pages = this.props.pages;
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
           {this.state.price}
          </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      price: state.price,
      pages: state.pages
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      onClick(price){
        dispatch(addTax(price));
      }
    };
  }

// export default Home
export default connect(mapStateToProps,mapDispatchToProps)(Home);
