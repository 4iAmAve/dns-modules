// import * as path from 'path';
import * as express from 'express';
// import * as logger from 'morgan';
// import * as bodyParser from 'body-parser';

import AuthRoutes from './controllers/auth';

class App {
  public app: express.Application;
  public port: any = process.env.PORT || 1337;

  constructor() {
    this.app = express();
    // this.mountHomeRoute();
    this.config();
    this.api();
    // this.prepareStatic();
    // this.setViewEngine();
  }

  // This serves everything in `static` as static files
  // private prepareStatic(): void {
  //   this.express.use(express.static(path.join(__dirname, "/../static/")));
  // }

  // Sets up handlebars as a view engine
  // private setViewEngine(): void {
  //   this.express.set("view engine", "hbs");
  //   this.express.set("views", path.join(__dirname, "/../src/views"));
  // }

  // private middleware(): void {
  //   this.express.use(logger('dev'));
  //   this.express.use(bodyParser.json());
  //   this.express.use(bodyParser.urlencoded({ extended: false }));
  // }

  public config(): void {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  }

  // Prepare the / route to show a hello world page
  // private mountHomeRoute(): void {
  //   const router = express.Router();
  //   router.get("/", (req, res) => {
  //     res.json({
  //       message: "Hello World!"
  //     });
  //   });
  //   this.express.use(‘/’, router)
  // }

  private api(): void {
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Server is running!'
      });
    });
    this.app.use('/', router);
    this.app.use('/user', AuthRoutes);
  }
}

export default new App().app;
