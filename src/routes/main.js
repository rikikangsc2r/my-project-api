const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Project API',
      version: '1.0.0',
      description: 'API documentation for My Project',
    },
    servers: [
      {
        url: 'https://my-project-api-three.vercel.app',
      },
    ],
  },
  apis: ['./src/routes/*.js'], 
};

const specs = swaggerJsdoc(options);

const customCss = `
  .swagger-ui .topbar { display: none }
  .swagger-ui .wrapper { max-width: 95%; margin: 0 auto; }
  .swagger-ui .opblock-tag { font-size: 1.2em; }
  .swagger-ui .opblock { width: 100%; }
`;

router.use('/', swaggerUi.serve, swaggerUi.setup(specs, { customCss }));

module.exports = router;
