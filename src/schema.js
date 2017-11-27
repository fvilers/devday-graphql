import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'world!'
    }
  })
});

export default new GraphQLSchema({
  query: QueryType
});
