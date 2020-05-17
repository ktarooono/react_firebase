import React, { Component } from 'react'
import firebase ,{config} from './utils/firebase'
import LoginPage from './pages/LoginPage'
import OriginalLoginPage from './pages/OriginalLoginPage'
import Home from './pages/Home'
import Header from './components/Header'
import createBrowserHistory from 'history/createBrowserHistory'
// import createStore from './modules/Store/Store';
import {appReducer,initialReduxState} from './utils/reduxUtils'
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import { ConnectedRouter} from 'connected-react-router'
import { BrowserRouter,Route, Redirect, Switch } from 'react-router-dom'

import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import './App.css'

// const history = createBrowserHistory();
// const store = createStore(history);
const reduxStore = createStore(appReducer,initialReduxState,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebase)  ,
    reactReduxFirebase(firebase)
  )
);

 class App extends Component {
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
      <Provider store={reduxStore}>
        <Header/>
            {/*<ConnectedRouter history={history}>*/}
            <BrowserRouter>
              {this.state.user?
                  <AppRoute/>
                  :<LoginRoute/>}
            {/*</ConnectedRouter>*/}
            </BrowserRouter>
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
export default App;
