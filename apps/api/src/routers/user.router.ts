import { EventController } from '@/controllers/users.controllers';
import { verifyToken } from '@/middleware/jwtVerifyToken';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.eventController.RegisterController);
    this.router.post('/login', this.eventController.LoginController);
    this.router.get('/keeplogin', verifyToken, this.eventController.KeepLogin);
  }

  getRouter(): Router {
    return this.router;
  }
}
