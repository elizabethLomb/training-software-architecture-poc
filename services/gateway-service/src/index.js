require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { NotFound } = require('http-errors');
const cookieParser = require('cookie-parser');

const requestLogger = require('../middleware/requestLogger');
const config = require('../config');

const healthcheckRouter = require('./routes/health');

const app = express();
const port = config.server.port;
const server = config.server.host;

app.use(express.json());
app.use(cors());
app.use(requestLogger(app));
app.use(cookieParser());

app.use(bodyParser.text({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
  res.send('Gateway service running');
});

app.use('/health', healthcheckRouter);

app.listen(port, () => {
  console.log(`[Auth] - Server is running on ${server}:${port}`);
});