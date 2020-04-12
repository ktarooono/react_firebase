import React, { Component } from 'react'
import firebase from '../utils/firebase'
import * as firebaseui from 'firebaseui'

class OriginalLoginPage extends Component {
  state = {
    user: null
  }

componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ user })
  })
  const uiConfig = {
      // ログイン完了時のリダイレクト先
      signInSuccessUrl: '/done.html',

      // 利用する認証機能
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID  //メール認証
      ],

      // 利用規約のURL(任意で設定)
      tosUrl: 'http://example.com/kiyaku/',
      // プライバシーポリシーのURL(任意で設定)
      privacyPolicyUrl: 'http://example.com/privacy'
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
}

logout() {
  firebase.auth().signOut()
}

render() {
  return (
    <div>
      <h1>Hello Firebase Auth</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  )
}
}
export default OriginalLoginPage;
