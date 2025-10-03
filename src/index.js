const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const mainRouter = require('./routes/main');

const app = express();

app.use(helmet());
app.use(compression());

app.use('/', mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
