const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, '/src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
