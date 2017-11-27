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

const fetchJson = input => {
  const url = new URL(input, 'http://localhost:3000');

  return fetch(url.href)
    .then(response => response.json());
};

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'Somebody that you used to know',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    friends: {
      type: new GraphQLList(PersonType),
      description: 'Everybody should have some',
      resolve: (person, args, { loaders }) => loaders.person.loadMany(person.friends)
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of our queries (not as in "sudo make me sandwich")',
  fields: () => ({
    person: {
      type: PersonType,
      description: 'Find people',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (root, args, { loaders }) => loaders.person.load(`/people/${args.id}`)
    },
    people: {
      type: new GraphQLList(PersonType),
      description: 'Get one person by its ID',
      resolve: () => fetchJson('/people')
    }
  })
});

export default new GraphQLSchema({
  query: QueryType
});
