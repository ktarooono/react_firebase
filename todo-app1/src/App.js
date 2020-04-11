import React, { Component } from 'react'
import firebase from './firebase'
import LoginPage from './LoginPage'
import OriginalLoginPage from './OriginalLoginPage'
import Home from './Home'
import Header from './Header'
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './modules/Store/Store';
import {Provider} from 'react-redux';
import { ConnectedRouter} from 'connected-react-router'
import { Route, Redirect, Switch } from 'react-router-dom'

import './App.css'

const history = createBrowserHistory();
const store = createStore(history);


export default class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Provider store={store}>
            <ConnectedRouter history={history}>
              {this.state.user?
                  <AppRoute/>
                  :<LoginRoute/>}
            </ConnectedRouter>
        </Provider>

      </div>
    )
  }
}
// <Router>
// <Route component={AppRoute} />
// </Router>

// <ConnectedRouter history={history}>
//   <AppRoute/>
// </ConnectedRouter>

//
const AppRoute = (props) => (
<React.Fragment>
  <Switch>
    <Route path="/Home" component={Home}/>
    <Route path="/"  render={({ match }) => (
      <Redirect to={`/Home`} />
    )}/>
  </Switch>
</React.Fragment>
)
const LoginRoute = (props) => (
<React.Fragment>
  <Switch>
    <Route path="/LoginPage" component={LoginPage}/>
    <Route path="/OriginalLoginPage" component={OriginalLoginPage}/>
    <Route path="/"  render={({ match }) => (
      <Redirect to={`/LoginPage`} />
    )}/>
  </Switch>
</React.Fragment>
)
