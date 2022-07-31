import express from 'express';
import morgan from 'morgan';
import { join } from 'path';
import { exampleRouter } from './routes/example';

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use('/public', express.static(join(__dirname, 'public')));

app.use('/example', exampleRouter);

app.get('/', (_, res) => {
  res.status(200).json({ root: true });
});

export default app;
