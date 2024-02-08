import express, { Request, Response} from 'express';
import apiRoutes from './routes/apiRoutes';

const server = express();

server.use(apiRoutes);

server.listen(3000, () => console.log('Server running'));
