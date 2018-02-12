import React, { Component } from 'react';
import MenuBox from './MenuBox';

class MainNav extends Component {
  render() {
    return (
      <div className="main-nav">
        <div className="app-name">
          <h2>My Weather</h2>
        </div>
        <MenuBox />
      </div>
    )
  }
}

export default MainNav;