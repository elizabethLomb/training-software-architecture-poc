import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const port = process.env.PORT || 3001;
const server = process.env.NODE_SERVER || 'http://localhost';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth API',
      version: '1.0.0',
      description: 'API Authentication Service',
    },
    servers: [{ url: `${server}:${port}` }],
  },
  apis: ['src/routes/*.ts', 'docs/swagger/routes/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
