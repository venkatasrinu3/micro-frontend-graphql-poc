import { ApolloServer, gql } from "apollo-server";
import { postsData } from "./db";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type UserData {
    userId: String
    name: String
    age: Int
    gender: String
    email: String
  }

  type PostsData {
    albumId: Int
    id:Int
    title: String
    url: String
    thumbnailUrl: String
  }

  type Query {
    books: [Book],
    users: [UserData],
    posts: [PostsData]
  }

  type Mutation {
    addUser(name: String, age: Int, gender: String, email: String ): UserData
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const userData = [
  {
    userId: "",
    name: "Srivatsava",
    age: 25,
    gender: "Male",
    email: "venkatasrinu3@gmail.com"
  },
  {
    userId: "",
    name: "Chaitanya",
    age: 32,
    gender: "Male",
    email: "chathan2569@gmail.com"
  },
  {
    userId: "",
    name: "Hemanth",
    age: 33,
    gender: "Male",
    email: "hemanthdarba@gmail.com"
  }
]


const updatedUserData = userData.map((ele) => {
  ele["userId"] = ele.email.split("@")[0]
  return ele;
})




const resolvers = {
  Query: {
    books: () => books,
    users: () => updatedUserData,
    posts: () => postsData
  },
  Mutation: {
    addUser: (_: any, args: any) => {
      const newUser = { ...args }
      userData.push(newUser)
      return newUser
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 8080 }).then(({ url }: { url: string }) => {
  console.log(`🚀  server ready at ${url}`);
});
