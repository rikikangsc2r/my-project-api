const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const swaggerRoutes = require('./routes/swagger');

const app = express();

app.use(helmet());
app.use(compression());

app.use('/', swaggerRoutes);

module.exports = app;
