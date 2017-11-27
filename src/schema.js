import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import fetch from 'node-fetch';

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
      resolve: (root, args) =>
        fetch(`http://localhost:3000/people/${args.id}`)
          .then(response => response.json())
    }
  })
});

export default new GraphQLSchema({
  query: QueryType
});
