import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const createResolution = gql`
  mutation createResolution($name: String!){
    createResolution(name: $name){
      _id
    }
  }
`;

class ResolutionForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:''
    }
  }
  submitForm = (event) => {
    event.preventDefault();

    this.props.createResolution({
      variables: {
        name: this.state.name
      }
    }).then(data => {
      console.log('data ok')
      //this.props.refetch();
    })
      .catch(e => console.error('data error'));
    
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

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ["Resolutions"]
  }
})(ResolutionForm);
