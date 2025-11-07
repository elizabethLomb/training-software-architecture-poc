import express from 'express';
import { setupSwagger } from '../docs/swagger';
import {
  authRoutes,
  healthcheckRouter,
} from './routes/index';
import { requestLogger } from '../middleware/requestLogger';
import config from '../config';

const app = express();
const port = config.server.port;
const server = config.server.host;

app.use(express.json());

requestLogger(app);
setupSwagger(app);

app.get('/', (req, res) => {
  res.send('Hello from auth service');
});
app.use('/auth', authRoutes);
app.use('/health', healthcheckRouter);

app.listen(port, () => {
  console.log(`[Auth] - Server is running on ${server}:${port}`);
});
