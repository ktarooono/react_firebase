import React, { Component } from 'react'
import firebase from '../utils/firebase'
import {Tabs,Tab} from '@material-ui/core'
import PageTabs from '../components/PageTabs'
import {connect} from 'react-redux'
import {addTaxAction,addMyPagesAction,selectMyPageAction} from '../utils/reduxUtils'

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
    const initialMyPage = this.props.myPages[0];
    this.props.selectMyPage({index:0,page:initialMyPage});
  }

  logout() {
    firebase.auth().signOut()
  }
  onClickAddMyPage(e){
    this.props.addMyPage("");
  }
  render() {
    return (
      <div className="Home" >
      <div className=""  style={{display:"inline-block"}}  >
      <h1>{this.props.selectedMyPage.page.label}</h1>
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
      myPages: state.myPages,
      selectedMyPage:state.selectedMyPage
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      addTax(price){
        dispatch(addTaxAction(price));
      },
      addMyPage(myPage){
        dispatch(addMyPagesAction(myPage));
      },
      selectMyPage(selectMyPage){
              dispatch(selectMyPageAction(selectMyPage));
      }
    };
  }

// export default Home
export default connect(mapStateToProps,mapDispatchToProps)(Home);
