const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const specs = require('../config/swagger');

const customCss = `
  .swagger-ui .topbar { display: none }
  .swagger-ui .wrapper { max-width: 95%; margin: 0 auto; }
  .swagger-ui .opblock-tag { font-size: 1.2em; }
  .swagger-ui .opblock { width: 100%; }
`;

router.use('/', swaggerUi.serve, swaggerUi.setup(specs, { customCss }));

module.exports = router;
