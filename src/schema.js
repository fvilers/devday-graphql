import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: '',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    friends: {
      type: PersonType,
      resolve: () => null
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '',
  fields: () => ({
    person: {
      type: PersonType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: () => null
    }
  })
});

export default new GraphQLSchema({
  query: QueryType
});
