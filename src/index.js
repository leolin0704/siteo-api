import Express from 'express';
import path from 'path';
import cors from 'cors';
//import redis from 'redis';

// const client = redis.createClient(6379,'redis-service');

// client.set('hello','This is a value!');
import bodyParser from 'body-parser';
import middlewares from './middlewares';

import frontRoutes from './frontRoutes';
import backendRoutes from './backendRoutes';


const app = new Express();
const port = process.env.PORT || 8888; 

app.get('/heartbeat', (req, res) => {
  res.send('Hello world');
  res.end();
});

app.use(cors());
app.use(bodyParser.json());  

app.use('/static', Express.static(path.join(process.cwd(), 'static'), { maxAge: '1d' }));

app.use('/api/front', middlewares.validUserToken, frontRoutes);
app.use('/api/backend', middlewares.validAdminToken, backendRoutes);

app.listen(port, () => {
  const message = `Server listening on port:${port}`;

  console.log(message);
});
