import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './resolutionForm';

const App = ({data}) => {
  if (!data.loading){

    return (
      <div>
        <h1>{data.hi}</h1>
        <ResolutionForm refetch={data.refetch}></ResolutionForm>
        <ul>
          {data.resolutions.map((res) => {
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
const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(
  hiQuery
)(App);