const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./router.json');
const apiMain = require('./apiMain');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/main', apiMain);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
