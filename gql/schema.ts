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
    number: Number!
    cvv: Number!
    expirity: String!
    money: Number!
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
    distance: Number!
    date: String!
    money: Number!
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
    addCard(number: Number!,expirity:String!,money:Number!,cvv:Number!): Cliente!
    addViaje(clientId:ID!,driverId:ID!,money:Number!,distance:Number!,date:String!) : Viaje!
    endViaje(id:ID!): Viaje!
  }
`;