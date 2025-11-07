require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const requestLogger = require('../middleware/requestLogger');
const config = require('../config');

const healthcheckRouter = require('./routes/health');
const authProxy = require('./routes/authProxy');

const app = express();
const port = config.server.port;
const server = config.server.host;

app.disable('x-powered-by');
app.use(cors());
app.set('trust proxy', 1);
app.use(requestLogger(app));
app.use(cookieParser());

// PROXY ROUTES
app.use('/identity', authProxy);

app.use(bodyParser.text({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from gateway service');
});
app.use('/health', healthcheckRouter);

app.listen(port, () => {
  console.log(`[Gateway] - Server is running on ${server}:${port}`);
});