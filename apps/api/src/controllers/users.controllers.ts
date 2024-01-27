import { alleventaction } from '@/actions/event/getallevent.action';
import { forgotPasswordAction } from '@/actions/forgotpassword.action';
import { keepLoginAction } from '@/actions/keepLogin.action';
import { loginAction } from '@/actions/login.action';
import { findRefferal } from '@/actions/refferal/findRefferalUser';
import { registerAction } from '@/actions/register.action';
import { resetPasswordAction } from '@/actions/resetpassword.action';
import { findpointaction } from '@/actions/reward/findpointbyid';
import { claimRewardAction } from '@/actions/reward/reward';
// import { totalPoint } from '@/actions/transaction/totalpoint';

import { NextFunction, Request, Response } from 'express';

export class EventController {
  async RegisterController(req: Request, res: Response, next: NextFunction) {
    try {
      const codeRefferal = req.body.refferal_number;
      const result = await registerAction(req.body, codeRefferal);
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

  async ForgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await forgotPasswordAction(req.body.email);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  async ResetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.user!.email;

      const result = await resetPasswordAction(email, req.body);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  //Refferal number get checking
  async GetRefferalCode(req: Request, res: Response, next: NextFunction) {
    try {
      const refferal = req.body.refferal_number;

      const result = await findRefferal(refferal);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }
  async getAllEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await alleventaction();
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  async claimReward(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await claimRewardAction(req.body);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  async findPointById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await findpointaction(parseInt(req.params.id));
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }
}
