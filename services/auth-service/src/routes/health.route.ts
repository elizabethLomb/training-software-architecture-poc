import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.set('Content-Type', 'text/plain');
  const message = 'Service is running';
  res.send(message.toString());
});

export default router;