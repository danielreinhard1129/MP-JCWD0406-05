// import { hashPassword } from '@/lib/bcrypt';

import { hashPassword } from '@/lib/bcrypt';
import { nanoid } from '@/lib/nanoid';
import { findUserByEmail } from '@/repositories/findUserByEmail';

import { findRefferalRepo } from '@/repositories/refferal/getRefferalUser';
import { registerRepo } from '@/repositories/register';

import { createPointUser } from '@/repositories/reward/upsertpoint';
import { createVoucher } from '@/repositories/voucher/createvoucher';

import { IUser } from 'types/types';

export const registerAction = async (body: IUser, refferal_number: string) => {
  try {
    const { email, password } = body;

    const userEmail = await findUserByEmail(email);

    if (userEmail) {
      return {
        status: 400,
        message: 'Email already exist',
      };
    }
    // Hashing password
    const hashedPassword = await hashPassword(password);
    body.password = hashedPassword;

    const refferalData = await findRefferalRepo(refferal_number);
    const refferal = nanoid();
    const userRegister = await registerRepo(body, refferal);
    if (refferalData) {
      await createPointUser(refferalData.id),
        await createVoucher(
          userRegister.id,
          1,
          new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000),
        );
    }

    return {
      status: 200,
      message: 'Register success',
      refferalData,
    };
  } catch (error) {
    throw error;
  }
};
