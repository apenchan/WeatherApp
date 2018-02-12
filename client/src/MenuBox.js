import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MenuBox extends Component{
  constructor(props) {
    super(props);
    this.state = { show: false };
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
          <button className="dropdown-btn" type="button" ><FontAwesome onClick={this.handleToggle} className="icon-menu" name="bars" size="3x" /></button>
          {this.state.isToggled ?  <ul>
              <li>test 1</li>
              <li>test 2</li>
            </ul> : ''} 
            {/* this will need to change to props. for now, its listed here */}
        </div>
    )
  }
}

export default MenuBox;