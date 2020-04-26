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



  render() {
    const menuItemList = this.props.list.map((menu) => {
      return  <MenuItem onClick={menu.func}>{menu.label}</MenuItem>
    })
    return (
      <div className="RightClickMenu" style={this.props.styles}>
      <div className="FadeLayer" onClick={this.props.closeFunction}/>
        <Paper>
        <MenuList>
          {menuItemList}
        </MenuList>
        </Paper>
      </div>
    )
  }
}
export function RightClickMenuFunctions(e){
  var functionList =  {
    viewMenu: function (e) {
      var styles = {
        top:e.pageY,
        left:e.pageX,
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
