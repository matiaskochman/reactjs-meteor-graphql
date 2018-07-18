import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import _ from 'lodash';
import ResolutionsSchema from '../../api/resolutions/resolution.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UserSchema from '../../api/users/user.graphql';
import UsersResolvers from '../../api/users/resolvers';

//I had to add and save this comment to avoid an error

//123

const typeDefs = [
  ResolutionsSchema,
  UserSchema
]

const resolvers = _.merge(
  ResolutionsResolvers,
  UsersResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
createApolloServer({schema});