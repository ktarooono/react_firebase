import React, { Component } from 'react'
import firebase from '../utils/firebase'
import {Tabs,Tab} from '@material-ui/core'
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
    const tabList = this.props.myPages.map((page) => {
      return <div><Tab className={ this.state.disableTabIndex == this.props.selectedMyPage.index ? "tab selected":"tab" }
       contentEditable={ this.state.disableTabIndex == this.props.selectedMyPage.index ? true:false } label={page.label}
       onClick={this.onClickSelectPage.bind(this,{index:tabIndex,page:page})}
      ondblclick={this.changeDisableTabIndex.bind(this,tabIndex++)} />
        <i class="far fa-arrow-alt-circle-up"></i>
        </div>
    });

    return (
          <Tabs className="tabs" value={this.props.selectedMyPage.index} aria-label="simple tabs example">
            {tabList}
            <Tab className="tab plus" label={'+'}  onClick={this.onClickAddMyPage.bind(this)} />
          </Tabs>
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
