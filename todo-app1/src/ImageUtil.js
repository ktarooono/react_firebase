import React, { Component } from 'react'
import firebase from './firebase'
import LoginOutButton from './LoginOutButton'
import myPortalIcon from './Images/system/my-portal_logo.png'
import myPortalIconShick from './Images/system/my-portal_logo_shick.png'
import googleLoginIcon from './Images/google/google_icons/google_icon.png'

import './App.css'

export default class ImageUtil extends Component {

}
export function myPortalIconSrc(props){
  return myPortalIcon;
}
export function myPortalIconShickSrc(props){
  return myPortalIconShick;
}
export function googleLoginIconSrc(props){
  return googleLoginIcon;
}
