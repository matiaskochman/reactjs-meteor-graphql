import React, { Component } from 'react';

export default class Goal extends Component {

  
  render(){
    console.log('goalname: ',this.props.goal.name)
    return(
      <li>
        <input type="checkbox" />
        {this.props.goal.name}
      </li>
    );
  }
}