export const typeDefs = `#graphql
  type Cliente {
    id: ID!
    name: String!
    email: String!
    cards: [Tarjetas]
    travels: [Viaje]
  }

  type Tarjetas {
    id: ID!
    number: Int!
    cvv: Int!
    expirity: String!
    money: Float!
  }

  type Conductor {
    id: ID!
    name: String!
    email: String!
    username:String!
    travels: [Viaje]
  }

  type Viaje {
    id: ID!
    client: String
    driver: String
    distance: Float!
    date: String!
    money: Float!
    status: String
  }

  type Query {
    clients: [Cliente!]!
    drivers: [Conductor!]!
    travels: [Viaje!]!
  }
  type Mutation {
    addClient(name: String!, email: String!): Cliente!
    deleteClient(id: ID!): Cliente!
    addDriver(name: String!, email: String!, username: String!): Conductor!
    deleteDriver(id: ID!): Conductor!
    addCard(number: Int!,expirity:String!,money:Float!,cvv:Int!): Cliente!
    addViaje(clientId:ID!,driverId:ID!,money:Float!,distance:Float!,date:String!) : Viaje!
    endViaje(id:ID!): Viaje!
  }
`;
