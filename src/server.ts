import { createServer } from 'http';
import app from './app';
import { PORT } from './config/constants';

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`server listening on: http://localhost:${PORT}`);
});
