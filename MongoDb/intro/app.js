const fs = require('fs');
const express = require('express');
// const database = require('./server/config/database');
// const user = require('./server/api/user');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/write-file', (req, res) => {
  fs.writeFile('newFile.txt', '', () =>
    res.status(200).json({
      status: 'success',
      message: 'new file created!',
    })
  );
});

app.get('/add-content', (req, res) => {
  fs.appendFile('newFile.txt', 'Hello this a some random text......', () => {
    const fileContent = fs.readFileSync('newFile.txt', 'utf-8');
    res.status(200).json({
      status: 'success',
      message: 'new content added!',
      data: {
        content: fileContent,
      },
    });
  });
});

app.get('/read-file', (req, res) => {
  fs.readFile('newFile.txt', 'utf-8', (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/delete-file', (req, res) => {
  fs.unlink('newFile.txt', () => {
    res.status(200).json({
      status: 'success',
      message: 'file deleted successfully!',
    });
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
