index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use the PORT environment variable if available, otherwise use 8080

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running at http://127.0.0.1.nip.io:${port}`);
});
