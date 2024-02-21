const express = require('express');
const database = require('./server/config/database');
const user = require('./server/api/user');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
