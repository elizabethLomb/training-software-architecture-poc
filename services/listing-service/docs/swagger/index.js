const config = require('../../config');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = config.server.port;
const server = config.server.host;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Listing API',
      version: '1.0.0',
      description: 'Listing Service API',
    },
    servers: [{ url: `${server}:${port}` }],
  },
  apis: ['src/routes/*.ts', 'docs/swagger/routes/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);
const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;