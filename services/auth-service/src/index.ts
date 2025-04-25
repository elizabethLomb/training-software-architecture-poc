import express, { Request, Response } from 'express';
import { setupSwagger } from '../docs/swagger';
import authRoutes from './routes/index';
import { requestLogger } from '../middleware/requestLogger';

const app = express();
const port = process.env.PORT || 3001;
const server = process.env.NODE_SERVER || 'http://localhost';

app.use(express.json());

requestLogger(app);
setupSwagger(app);
app.use('/api/auth', authRoutes);

app.get('/health', async (_: Request, res: Response) => {
  const message = 'Service is running';
  res.status(200).json({ status: 'ok', response: message });
});

app.listen(port, () => {
  console.log(`Server is running on ${server}:${port}`);
});
