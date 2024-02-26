const mongoose = require('mongoose');

mongoose
  .connect(process.env.DATABASE_CONNECT)
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log('error!', err);
  });
