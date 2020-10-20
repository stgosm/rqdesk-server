const express = require('express');
const app = express();
const mongoose = require('mongoose');

const APP_PORT = 3001;

mongoose.connect('mongodb://127.0.0.1:27017', {
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