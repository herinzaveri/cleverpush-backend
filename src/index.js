const express = require('express');
const cors = require('cors');

const config = require('./config');
const middlewares = require('./middlewares');
const restService = require('./rest-service');

const app = express();

app.use(cors());
app.use(express.json());
app.use(middlewares.formatting);

app.use('/', restService);

const PORT = config.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
