"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_1 = require("./controllers/auth");
class App {
    constructor() {
        this.port = process.env.PORT || 1337;
        this.app = express();
        this.config();
        this.api();
    }
    config() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    }
    api() {
        let router = express.Router();
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