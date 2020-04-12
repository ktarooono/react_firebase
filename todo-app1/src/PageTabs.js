import React, { Component } from 'react'
import firebase from './firebase'
import {Tabs,Tab} from '@material-ui/core'

class PageTabs extends Component {

  constructor(props){
    super(props);
    this.state= {
      user: null,
      pages:[{label:'test'}]
    }
    this.state.pages= this.props.pages;
  }

  componentDidMount() {

      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user })
      })

  }


  render() {
    const tabList = this.state.pages.map((page) => {
      return <Tab className="tab" label={page.label}/>
    });
    return (
          <Tabs className="tabs"value={"value"} onChange={() => {}} aria-label="simple tabs example">
            {tabList}
            <Tab className="tab plus" label={'+'}/>
          </Tabs>
    )
}
}
export default PageTabs
