const express = require('express');

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const requiredEmail = 'rahul@gmail.com';
  const requiredPassword = '#####';

  if (!email) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please enter email',
    });
  }

  if (!password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please enter password',
    });
  }

  if (email === requiredEmail && password === requiredPassword) {
    return res.status(200).json({
      status: 'success',
      message: 'You are logged in!',
    });
  } else {
    return res.status(500).json({
      status: 'error',
      message: 'Invalid email or password',
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}........`);
});
