import React, { Component } from 'react'
import myPortalIcon from '../Images/system/my-portal_logo.png'
import myPortalIconShick from '../Images/system/my-portal_logo_shick.png'
import tanbo from '../Images/system/田んぼ.jpeg'
import googleLoginIcon from '../Images/google/google_icons/google_icon.png'

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

export function tanboSrc(props){
  return tanbo;
}
