import React, { Component } from 'react';
import LoginForm from './LoginForm'
import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter, Redirect } from 'react-router-dom'
// import MenuBox from './MenuBox';

class MenuListBox extends Component{
  render(){
    return(
      <ul className="menu-list-ul">
        <li className="menu-list-li"><Route path="/"/>Login</li>
        <li className="menu-list-li">Create Account</li>
        <li className="menu-list-li">Edit Weather List</li>
      </ul>
    )
  }
}

export default MenuListBox;