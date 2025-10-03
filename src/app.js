const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const swaggerRoutes = require('./routes/swagger');
const mainRoutes = require('./routes/main');

const app = express();

app.use(helmet());
app.use(compression());

app.use('/api-docs', swaggerRoutes);
app.use('/', mainRoutes);

module.exports = app;
