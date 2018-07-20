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
      name:'',
      error:''
    }
  }
  componentWillUpdate(props){
    if(this.state.error !== ''){
      this.setState({error: ''})
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
      .catch(e => {
        console.log(e);
        this.setState({error: e.message})
      });
    
    this.setState({name:''});
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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
