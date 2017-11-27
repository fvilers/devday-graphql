import { URL } from 'url';
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';
import fetch from 'node-fetch';

const fetchPerson = input => {
  const url = new URL(input, 'http://localhost:3000');

  return fetch(url.href)
    .then(response => response.json());
};

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: '',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    friends: {
      type: new GraphQLList(PersonType),
      resolve: person => person.friends.map(fetchPerson)
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
      resolve: (root, args) => fetchPerson(`/people/${args.id}`)
    }
  })
});

export default new GraphQLSchema({
  query: QueryType
});
