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
    this.router.post('/forgot-password', this.eventController.ForgotPassword);
    this.router.patch(
      '/reset-password',
      verifyToken,
      this.eventController.ResetPassword,
    );

    this.router.post('/verify-refferal', this.eventController.GetRefferalCode);
  }

  getRouter(): Router {
    return this.router;
  }
}
