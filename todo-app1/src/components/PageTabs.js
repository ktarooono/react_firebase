import React, { Component } from 'react'
import firebase from '../utils/firebase'
import {Tabs,Tab} from '@material-ui/core'
import {addTaxAction,addMyPagesAction} from '../utils/reduxUtils'
import {connect} from 'react-redux'


class PageTabs extends Component {

  constructor(props){
    super(props);
    this.state= {
      user: null
    }
  }

  componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user })
      })

  }
  onClickAddMyPage(e){
    this.props.addMyPage({label:"new1"});
    this.setState({pages:""});
  }
  test(e){
    this.setState({pages:""});
  }

  render() {
    const tabList = this.props.myPages.map((page) => {
      return <Tab className="tab" label={page.label} onClick={this.test.bind(this)}/>
    });
    // onChange={() => {}}
    return (
          <Tabs className="tabs"value={0} aria-label="simple tabs example">
            {tabList}
            <Tab className="tab plus" label={'+'}  onClick={this.onClickAddMyPage.bind(this)} />
          </Tabs>
    )
  }
}

function mapStateToProps(state) {
    return {
      price: state.price,
      myPages: state.myPages
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      addTax(price){
        dispatch(addTaxAction(price));
      },
      addMyPage(myPage){
        dispatch(addMyPagesAction(myPage));
      }
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(PageTabs)
