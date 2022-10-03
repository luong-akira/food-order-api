import 'module-alias/register';
import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { Express } from 'express';
import * as routes from './routes';
import { environment } from './config/';
import * as startSetup from '../setup';
const PORT: number = environment.port || 3000;
import * as schedule from './cronjob/schedule';
import * as colors from 'colors/safe';
import { orderProcesses, orderQueue } from './queues/order/order.queue';
import { createServer } from 'http';
import { socketServer } from '@config/socket';
const { createBullBoard } = require('@bull-board/api');
const { BullAdapter } = require('@bull-board/api/bullAdapter');
const { ExpressAdapter } = require('@bull-board/express');
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullAdapter(orderQueue)],
  serverAdapter: serverAdapter,
});

//sequelize.query('select 1 as result');

console.log(PORT);
export class Server {
  private app: Express;
  private httpServer;

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    socketServer.start(this.httpServer);
    this.app.use(cors());
    this.app.use(
      urlencoded({
        extended: true,
      }),
    );
    this.app.use(json());
    this.app.use('/uploads', express.static('uploads'));
    this.app.use(express.static('public'));
    this.app.use(
      cors({
        optionsSuccessStatus: 200,
      }),
    );
    this.app.use(morgan('combined'));

    this.app.get('/index', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });

    socketServer.io.on('connection', (socket) => {
      console.log(colors.yellow(colors.underline('user has been connected')));
    });

    this.httpServer.listen(PORT, () => {
      console.log(colors.yellow(colors.underline(`Server successfully started at port ${PORT}`)));
    });
    this.app.use('/admin/queues', serverAdapter.getRouter());

    routes.initRoutes(this.app);
    orderProcesses();
  }

  getApp() {
    return this.app;
  }
}
new Server();
startSetup();
