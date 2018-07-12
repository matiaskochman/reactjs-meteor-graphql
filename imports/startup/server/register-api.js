import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import _ from 'lodash';
import ResolutionsSchema from '../../api/resolutions/resolution.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

//I had to add and save this comment to avoid an error

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [
  testSchema,
  ResolutionsSchema
]
const resolver = {
  Query: {
    hi() {
      return "Hello Matias";
    }
  }
};

const resolvers = _.merge(resolver, ResolutionsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
createApolloServer({schema});