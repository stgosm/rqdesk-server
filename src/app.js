const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const ExpressPlayground = require('graphql-playground-middleware-express').default;
const mongoose = require('mongoose');

const APP_PORT = 3001;

const schema = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app });
app.get('/playground', ExpressPlayground({ endpoint: '/graphql'}))

mongoose.connect('mongodb://127.0.0.1:27017/rqdeskdb', {
    useNewUrlParser: true,
    useUnifiedTopology:true
  }).then(() => {
    app.listen(APP_PORT, () => {
      console.log(`GraphQL API is listening on port ${APP_PORT}`);
      console.log(`Connected to MongoDB successfully`);
    });
  }).catch(err => {
    throw err;  
});