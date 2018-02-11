import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MenuBox extends Component{
  constructor(props){
  super(props);
    this.state={show: false};
    // this.handleChange = this.handleChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.hideToggle = this.hideToggle.bind(this);
  }
  toPage(e){
    e.preventDefault();
  }
  toggleShow(){
    this.setState({show: !this.state.show})
    alert("I was clicked");
  }
  hideToggle(){
    this.setState({show: false})
  }
  render(){
    return(
      <div className="dropdown">
        <button className="dropdown-btn" type="button" onClick={this.toggleShow} className="icon-menu" name="bars" onBlur={this.hideToggle} ></button>
      </div>
    )

  }

}

export default MenuBox;