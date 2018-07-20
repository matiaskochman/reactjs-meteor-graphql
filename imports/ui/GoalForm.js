import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!){
    createGoal(name: $name, resolutionId: $resolutionId){
      _id
    }
  }
`;

class GoalForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:''
    }
  }
  submitForm = (event,resolutionId) => {
    event.preventDefault();
    this.props.createGoal({
      variables: {
        name: this.state.name,
        resolutionId: this.props.resolutionId
      }
    }).then(data => {
      console.log('data ok')
    })
      .catch(e => console.error('data error: ',e));
    
    this.setState({name:''});
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button
          onClick={event => this.submitForm(event)}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default graphql(createGoal, {
  name: 'createGoal',
  options: {
    refetchQueries: ["Resolutions"]
  }
})(GoalForm);
