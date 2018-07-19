import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import _ from 'lodash';

import GoalSchema from '../../api/goals/goal.graphql';
import GoalResolvers from '../../api/goals/resolvers';

import ResolutionsSchema from '../../api/resolutions/resolution.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UserSchema from '../../api/users/user.graphql';
import UsersResolvers from '../../api/users/resolvers';

//I had to add and save this comment to avoid an error

//123456789


const typeDefs = [
  GoalSchema,
  ResolutionsSchema,
  UserSchema
]

const resolvers = _.merge(
  GoalResolvers,
  ResolutionsResolvers,
  UsersResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
createApolloServer({schema});