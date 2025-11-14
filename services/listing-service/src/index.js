const express = require('express');

const requestLogger = require('../middleware/requestLogger');
const setupSwagger = require('../docs/swagger/index');
const config = require('../config');

const healthcheckRouter = require('./routes/health');

const app = express();
const port = config.server.port;
const server = config.server.host;

app.use(express.json());
app.use(requestLogger(app));
setupSwagger(app);

app.get('/', (_, res) => {
  res.send('Hello from listing service');
});
app.use('/health', healthcheckRouter);

app.listen(port, () => {
  console.log(`[Listing] - Server is running on ${server}:${port}`);
});
