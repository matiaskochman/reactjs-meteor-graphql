import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import ResolutionForm from './resolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

console.log(Accounts);
const App = ({loading, refetch, resolutions}) => {

  if (!loading){

    return (
      <div>
        <RegisterForm />
        <LoginForm />
        <ResolutionForm refetch={refetch}></ResolutionForm>
        <button onClick={() => Meteor.logout()}>Logout</button>
        <ul>
          {resolutions.map((res) => {
            return (
              <li key={res._id}> {res.name}</li>
            )
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div />
    )
  }
  
}
const resolutionQuery = gql`
  query Resolutions {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(
  resolutionQuery ,
  {
    props: ({data}) => ({...data})
  }
)(App);