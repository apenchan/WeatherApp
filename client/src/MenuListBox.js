import React, { Component } from 'react';
// import MenuBox from './MenuBox';

class MenuListBox extends Component{
  render(){
    return(
      <ul className="menu-list-ul">
        <li className="menu-list-li">Login</li>
        <li className="menu-list-li">Edit</li>
      </ul>
    )
  }
}

export default MenuListBox;