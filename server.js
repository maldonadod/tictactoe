const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8900;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}.`)
});
