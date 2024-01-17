import { EventController } from '@/controllers/users.controllers';
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
  }

  getRouter(): Router {
    return this.router;
  }
}
