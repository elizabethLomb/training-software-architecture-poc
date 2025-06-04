import express from 'express';
import { setupSwagger } from '../docs/swagger';
import {
  authRoutes,
  healthcheckRouter,
} from './routes/index';
import { requestLogger } from '../middleware/requestLogger';

const app = express();
const port = process.env.PORT || 3001;
const server = process.env.NODE_SERVER || 'http://localhost';

app.use(express.json());

requestLogger(app);
setupSwagger(app);
app.use('/api/auth', authRoutes);
app.use('/api/health', healthcheckRouter);

app.listen(port, () => {
  console.log(`Server is running on ${server}:${port}`);
});
