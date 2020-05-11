import React, { Component} from 'react'
// import {Tabs,Tab} from '@material-ui/core'
import classNames from 'classnames'
import firebase from '../utils/firebase'
import {Button} from '@material-ui/core'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {addTaxAction,addMyPagesAction,selectMyPageAction,initMyPagesAction} from '../utils/reduxUtils'
import {connect} from 'react-redux'
import RightClickMenu, {RightClickMenuFunctions} from './RightClickMenu'


class PageTabs extends Component {

  constructor(props){
    super(props);
    this.state= {
      user: null,
      disableTabIndex:-1,
      RightClickMenuStyles:RightClickMenuFunctions().closeMenu(),
      RightClickIndex:0
    }

  }

   componentDidMount() {
     (async () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user })
      })
      try {
        // 省略
        // (Cloud Firestoreのインスタンスを初期化してdbにセット)
        const db =firebase.firestore();
        const userRef = await db.collection('pages').doc('ono_ke')
        // userRef.set({
        //   pages:[{label:"firestore_test"}]
        // });

        const userDoc = await userRef.get()
        this.props.initMyPage(userDoc.data().pages);
        // 出力例
        // { birthday: Timestamp { seconds: 343062000, nanoseconds: 0 },
        //   createdAt: Timestamp { seconds: 1571747519, nanoseconds: 521000000 },
        //   name: { first: 'tarou', last: 'yamada' },
        //   score: 80,
        //   updatedAt: Timestamp { seconds: 1571747519, nanoseconds: 521000000 } }
      } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`)
      }
    })()
  }
  componentDidUpdate(){
      var editableTab = document.getElementsByClassName("tab editable");
      if(editableTab.length >0 ){
        editableTab[0].focus();
      }
  }
  onClickAddMyPage(e){
    this.props.addMyPage({label:"new1"});
    this.setState({pages:""});
  }
  onClickSelectPage(page,e){
    this.props.selectMyPage(page);
  }

  changeDisableTabIndex(e){
    this.setState(
      {
        disableTabIndex:this.state.RightClickIndex,
        RightClickMenuStyles:RightClickMenuFunctions().closeMenu()
      }
    )
  }
  resetDisableTabIndex(e){
    this.setState({
      disableTabIndex:-1
    })
  }

  viewRightClickMenu(index,e){
    var styles= RightClickMenuFunctions().viewMenu(e);
    this.setState({
      RightClickMenuStyles:styles,
      RightClickIndex:index
    });
    return false;
  }
  closeRightClickMenu(e){
    var styles= RightClickMenuFunctions().closeMenu(e);
    this.setState({
      RightClickMenuStyles:styles
    })
  }
  keyDownInTab(e){
    if(e.key === 'Enter') {
      this.resetDisableTabIndex(e);
      e.target.blur();
    }
  }

  render() {

    var tabIndex = 0;
    var tabListComponent = "";
    if(this.props.myPages){
    tabListComponent = this.props.myPages.map((page) => {
      return <Button className={classNames("tab "
      , this.props.selectedMyPage.index==tabIndex ? "selected":""
      , this.state.disableTabIndex == tabIndex ? "editable":""     )}
            color="primary"
            contentEditable={ this.state.disableTabIndex == tabIndex ? true:false }
            onClick={this.onClickSelectPage.bind(this,{index:tabIndex,page:page})}
            onContextMenu={this.viewRightClickMenu.bind(this,tabIndex++)}
            onKeyDown={this.keyDownInTab.bind(this)}
            onBlur={this.resetDisableTabIndex.bind(this)}
            >
        {page.label}
        </Button>
    });
  }

    return (
        <div  className="tabs" >
          {tabListComponent}
          <Button className="tab plus"   onClick={this.onClickAddMyPage.bind(this)} > + </Button>
          <RightClickMenu styles={this.state.RightClickMenuStyles} closeFunction={this.closeRightClickMenu.bind(this)}
           list={[{label:"EditName",func:this.changeDisableTabIndex.bind(this)}]}>
          </RightClickMenu>
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
      initMyPage(myPages){
        dispatch(initMyPagesAction(myPages));
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
