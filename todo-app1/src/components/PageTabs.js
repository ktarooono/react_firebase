import React, { Component} from 'react'
// import {Tabs,Tab} from '@material-ui/core'
import classNames from 'classnames'
import firebase from '../utils/firebase'
import {Button} from '@material-ui/core'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {addTaxAction,addMyPagesAction,selectMyPageAction} from '../utils/reduxUtils'
import {connect} from 'react-redux'


class PageTabs extends Component {

  constructor(props){
    super(props);
    this.state= {
      user: null,
      disableTabIndex:-1
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
  onClickSelectPage(page,e){
    this.props.selectMyPage(page);
  }
  changeDisableTabIndex(index,e){
    this.setState(
      {disableTabIndex:index}
    )
  }

  render() {
    var tabIndex = 0;
    const tabListComponent = this.props.myPages.map((page) => {
      return <Button className={classNames("tab ", this.props.selectedMyPage.index==tabIndex ? "selected":"")} color="primary"
            onClick={this.onClickSelectPage.bind(this,{index:tabIndex++,page:page})}>
        {page.label}
        </Button>
    });

    return (
      <div className="tabs">
              {tabListComponent}
                <Button className="tab plus"   onClick={this.onClickAddMyPage.bind(this)} > + </Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return state;
    //  {
    //   price: state.price,
    //   myPages: state.myPages,
    //   selectMyPage:state.selectMyPage
    // };
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

export default connect(mapStateToProps,mapDispatchToProps)(PageTabs)
