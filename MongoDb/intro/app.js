const fs = require('fs');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const database = require('./server/config/database');
const User = require('./server/api/user');
const app = express();

app.use(express.json());

app.post('/addUser', async (req, res) => {
  const { name, email, password, userType, createdAt } = req.body;

  const autoId = (await User.countDocuments()) + 1;
  const newUser = new User({
    autoId,
    name,
    email,
    password,
    userType,
    createdAt,
  });
  newUser
    .save()
    .then((data) => {
      res.status(201).json({
        status: 'success',
        message: 'New User Created',
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        message: err,
      });
    });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
