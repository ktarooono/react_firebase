import React, { Component} from 'react'
// import {Tabs,Tab} from '@material-ui/core'
import classNames from 'classnames'
import firebase from '../utils/firebase'
import {Paper,MenuList,MenuItem} from '@material-ui/core'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {addTaxAction,addMyPagesAction,selectMyPageAction} from '../utils/reduxUtils'
import {connect} from 'react-redux'


class RightClickMenu extends Component {

  constructor(props){
    super(props);
    this.state= {
      user: null,
      styles:this.props.styles
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

    return (
      <div className="RightClickMenu" style={this.state.styles}>
      <Paper>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
      </div>
    )
  }
}
export function RightClickMenuFunctions(){
  var functionList =  {
    viewMenu: function (e) {
      var styles = {
        top:"10px",
        left:"10px",
        visibility:"visible"
      };
      return styles;
    },
    closeMenu :function (e) {
      var styles = {
        visibility:"hidden"
      }
      return styles;
    }
  }
  return functionList;
}

function mapStateToProps(state) {
    return state;
  }

function mapDispatchToProps(dispatch) {
    return {
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(RightClickMenu)
