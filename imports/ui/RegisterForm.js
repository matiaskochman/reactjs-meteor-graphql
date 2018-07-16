import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  registerUser = (e) => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.state.email,
        password: this.state.password
      },
      error => {
        console.log(error)
      }
    )
  }
  emailChanged = (e) => {
    e.preventDefault();
    this.setState({email:e.target.value})
  }
  passwordChanged = (e) => {
    e.preventDefault();
    this.setState({password:e.target.value})
  }

  render(){
    return (
      <form onSubmit={this.registerUser}>
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
        <button type="submit">Register User</button>
      </form>
    );
  }
}