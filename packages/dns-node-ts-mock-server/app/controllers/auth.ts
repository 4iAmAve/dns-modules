import { Router, Request, Response, NextFunction } from 'express';

import { data as authMockData, Auth } from './mock.data';

export class AuthRouter {
  router: Router;

  /**
   * Initialize the TrackingRouter
   */
  constructor() {
    console.log('[TrackingRouter:constructor]: Creating routes for tracking data');
    this.router = Router();
    this.init();
  }

  /**
   * GET all Messages.
   */
  public authUser = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.query as Auth;
    let resp = {
      status: 404,
      error: true,
      message: 'User does not exists'
    };

    if (username === authMockData.username && password === authMockData.password) {
      resp = {
        status: 200,
        error: false,
        message: 'Success'
      };
    }

    res.send(JSON.stringify(resp));
  }

  public getUserData = (req: Request, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    let resp = {
      status: 404,
      error: true,
      message: 'User does not exists'
    } as any;

    if (uuid === authMockData.uuid) {
      resp = {
        status: 200,
        error: false,
        data: {
          name: authMockData.name,
          username: authMockData.username,
          uuid: authMockData.uuid
        }
      };
    }

    res.send(JSON.stringify(resp));
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/auth', this.authUser);
    this.router.get('/:uuid', this.getUserData);
  }
}

// Create the TrackingRouter, and export its configured Express.Router
const authRoutes = new AuthRouter();
authRoutes.init();

export default authRoutes.router;
