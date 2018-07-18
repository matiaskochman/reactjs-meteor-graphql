import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import ResolutionForm from './resolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

console.log(Accounts);
const App = ({loading, refetch, resolutions, client}) => { //client es ApolloClient de withApollo(App)

  if (!loading){

    return (
      <div>
        <button onClick={() => {
          Meteor.logout();
          client.resetStore();
          console.log('logout');
        }}>Logout</button>
        <RegisterForm client={client}/>
        <LoginForm client={client}/>
        <ResolutionForm refetch={refetch}></ResolutionForm>
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
)(withApollo(App));