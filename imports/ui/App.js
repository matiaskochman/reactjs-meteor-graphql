import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import ResolutionForm from './resolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import GoalForm from './GoalForm';
import Goal from './resolutions/Goal';

console.log(Accounts);
const App = ({loading, refetch, resolutions, client, user}) => { //client es ApolloClient de withApollo(App)

  if (!loading){

    return (
      <div>
        {user._id ? (
          <button onClick={() => {
            Meteor.logout();
            client.resetStore();
            console.log('logout');
          }}>Logout</button>
        ) : (
          <div>
            <RegisterForm client={client}/>
            <LoginForm client={client}/>
          </div>
        )}
        <ResolutionForm refetch={refetch}></ResolutionForm>
        <ul>
        {resolutions.map((res) => {
          return (
            <li key={res._id}>
            {res.name}
            <ul>
              {res.goals.length > 0 ? (res.goals.map((goal) => {
                  console.log('goal: ', goal);
                  return <Goal key={goal._id} goal={goal}/>
                })): (
                  <div></div>
                )
              }
            </ul>
                {console.log('res: ', res)}
                <GoalForm resolutionId={res._id}/>
              </li>
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
    resolutions {
      _id
      name
      goals{
        _id
        name
        completed
      }
    }
    user {
      _id
    }
  }
`;

export default graphql(
  resolutionQuery ,
  {
    props: ({data}) => ({...data})
  }
)(withApollo(App));