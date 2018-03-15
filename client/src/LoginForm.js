import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state={username: '', password: '', loggedIn: sessionStorage.getItem('jwt') != undefined}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(){
    e.preventDefault();
    axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      this.setState({
        username: this.state.username,
        password: this.state.password
      })
      console.log("going through login now");
    }).catch(function(err){
      console.log(err)
    })
  }
  render(){
    return(
      <form className="login-form" onSubmit={this.handleSubmit}>
      <div className="login-username">
        <form>
        <input type="text" value={this.state.username} required="true" placeholder="Username" onChange={this.handleChange}/>
        <input type="password" value={this.state.password} required="true" placeholder="Password" onChange={this.handleChange}/>
        </form>
      </div>
      </form>
    )
  }
}

export default LoginForm;