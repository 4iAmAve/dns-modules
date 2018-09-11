"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mock_data_1 = require("./mock.data");
class AuthRouter {
    constructor() {
        this.authUser = (req, res, next) => {
            const { username, password } = req.query;
            let resp = {
                status: 404,
                error: true,
                message: 'User does not exists'
            };
            if (username === mock_data_1.data.username && password === mock_data_1.data.password) {
                resp = {
                    status: 200,
                    error: false,
                    message: 'Success'
                };
            }
            res.send(JSON.stringify(resp));
        };
        this.getUserData = (req, res, next) => {
            const { uuid } = req.params;
            let resp = {
                status: 404,
                error: true,
                message: 'User does not exists'
            };
            if (uuid === mock_data_1.data.uuid) {
                resp = {
                    status: 200,
                    error: false,
                    data: {
                        name: mock_data_1.data.name,
                        username: mock_data_1.data.username,
                        uuid: mock_data_1.data.uuid
                    }
                };
            }
            res.send(JSON.stringify(resp));
        };
        console.log('[TrackingRouter:constructor]: Creating routes for tracking data');
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/auth', this.authUser);
        this.router.get('/:uuid', this.getUserData);
    }
}
exports.AuthRouter = AuthRouter;
const authRoutes = new AuthRouter();
authRoutes.init();
exports.default = authRoutes.router;
//# sourceMappingURL=auth.js.map