import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import propTypes from 'prop-types';
import ResolutionForm from './resolutionForm';
import GoalForm from './GoalForm';
import Goal from './resolutions/Goal';
import UserForm from './UserForm';

console.log(Accounts);
const App = ({loading, refetch, resolutions, client, user}) => { //client es ApolloClient de withApollo(App)

  propTypes = {
    resolutions: propTypes.array
  }

  if (!loading){

    return (
      <div>
        <UserForm
          user={user}
          client={client}
        />
        {user._id &&
          (<ResolutionForm refetch={refetch}></ResolutionForm>)
        }
        <ul>
        {user._id && resolutions.map((res) => {
          return (
            <li key={res._id}>
            <span style={{textDecoration: res.completed ? 'line-through' : 'none'}}>{res.name}</span>
            <ul>
              {res.goals.length > 0 ? (res.goals.map((goal) => {
                  return <Goal key={goal._id} goal={goal}/>
                })): (
                  <div></div>
                )
              }
            </ul>
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
      completed
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