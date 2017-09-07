const express = require('express');
const bodyParser = require('body-parser');
const messages = require('../perkgreed-messages');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ info: 'Hello, soldier. Did you forget to append path "/v1"?' });
});

app.use('/v1', require('./routes/index'));

app.get('*', (req, res) => {
  res.status(404).json({ res: messages.get('notFound') });
});

app.listen(3101);
