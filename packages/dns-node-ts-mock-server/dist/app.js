"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as path from 'path';
const express = require("express");
// import * as logger from 'morgan';
// import * as bodyParser from 'body-parser';
const auth_1 = require("./controllers/auth");
class App {
    constructor() {
        this.port = process.env.PORT || 1337;
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
    config() {
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
    api() {
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Server is running!'
            });
        });
        this.app.use('/', router);
        this.app.use('/user', auth_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map