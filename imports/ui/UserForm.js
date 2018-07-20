import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

class UserForm extends Component{
  render(){
    const { user, client } = this.props;
    return(
      <div>
        {user._id ? (
          <button onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}>Logout</button>
        ) : (
          <div>
            <RegisterForm client={client}/>
            <LoginForm client={client}/>
          </div>
        )}      
      </div>
    )
  }
}
export default UserForm;