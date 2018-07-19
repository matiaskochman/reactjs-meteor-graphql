import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const toggleGoal = gql`
  mutation toggleGoal($id: String!){
    toggleGoal(_id: $id){
      _id
    }
  }
`;

class Goal extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: false
    }
  }
  onClick = () => {
    this.props.toggleGoal({
      variables: {
        id: this.props.goal._id
      }
    }).then(data => {
      console.log('data ok')
    })
  }
  render(){
    console.log('goalname: ',this.props.goal.name)
    return(
      <li>
        <input
          type="checkbox"
          onChange={e => this.onClick()}
          checked={this.props.goal.completed}
          />
        {this.props.goal.name}
      </li>
    );
  }
}
export default graphql(toggleGoal, {
  name: 'toggleGoal',
  options: {
    refetchQueries: ["Resolutions"]
  }
})(Goal);