import { keepLoginAction } from '@/actions/keepLogin.action';
import { loginAction } from '@/actions/login.action';
import { registerAction } from '@/actions/register.action';

import { NextFunction, Request, Response } from 'express';

export class EventController {
  async RegisterController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerAction(req.body);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }
  async LoginController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginAction(req.body);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  async KeepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body.user;
      const result = await keepLoginAction(email as string);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }
}
