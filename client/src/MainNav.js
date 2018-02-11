import React, { Component } from 'react';
// import MenuBox from './MenuBox';

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleToggle = this.handleToggle.bind(this);
    // this.hideToggle = this.hideToggle.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  handleToggle() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }
  // hideToggle(e){
  //   console.log(e.target.id)
  //   e.preventDefault(e.target.id)
  //   this.setState({show: false})
  // }
  render() {
    return (
      <div className="main-nav">
        <div className="app-name">
          <h2>My Weather</h2>
        </div>

        <div className="dropdown">
          <button className="dropdown-btn" type="button" id="dropdown-btn" onClick={this.handleToggle} className="icon-menu" name="bars">button menu</button>
          {this.state.isToggled ?  <ul>
              <li>test 1</li>
              <li>test 2</li>
            </ul> : ''} 
            {/* this will need to change to props. for now, its listed here */}
        </div>
      </div>
    )
  }
}

export default MainNav;