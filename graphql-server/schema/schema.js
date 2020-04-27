const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

// some dummy data
var books = [
  {id: "1", name: "Name of the Wind", genre: "Fantasy"},
  {id: "2", name: "The Final Empire", genre: "Fantasy"},
  {id: "3", name: "The Long Earth", genre: "Sci-Fi"}
];

var authors = [
  {id: "1", name: "Patrick Rothfuss", age: 44},
  {id: "2", name: "Brandon Sanderson", age: 42},
  {id: "3", name: "Terry Pratchett", age: 66}
];

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        console.log(typeof args.id);
        return _.find(books, {id: args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
