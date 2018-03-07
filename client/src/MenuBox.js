import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import MenuListBox from './MenuListBox'
// import assests from '../../server/static/assests/x-icon.png'
// import xImage from '../../x-icon.png';

class MenuBox extends Component{
  constructor(props) {
    super(props);
    this.state = { menuOptions: false };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }
  render() {
    return (

        <div className="dropdown">
          <button className="dropdown-btn" type="button" onClick={this.handleToggle} >{this.state.isToggled ? <FontAwesome className="x-icon" name="times" size="3x"/> : <FontAwesome className="icon-menu" name="bars" size="3x" />}
          {this.state.isToggled ?  <MenuListBox />: ''} 
          </button>
        </div>
    )
  }
}

export default MenuBox;