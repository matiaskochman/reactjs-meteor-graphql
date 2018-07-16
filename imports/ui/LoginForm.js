import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }
  emailChanged = (e) => {
    e.preventDefault();
    this.setState({email:e.target.value})
  }
  passwordChanged = (e) => {
    e.preventDefault();
    this.setState({password:e.target.value})
  }
  
  login = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(
        this.state.email,
        this.state.password,
        error => {
          console.log(error)
        }
    )
  }
  render(){
    return (
      <form onSubmit={this.login}>
        <input
          onChange={this.emailChanged}
          type="email"
          value={this.state.email}
        />
        <input
          onChange={this.passwordChanged}
          type="password"
          value={this.state.password}
        />
        <button type="submit">Login User</button>
      </form>
    );
  }
}