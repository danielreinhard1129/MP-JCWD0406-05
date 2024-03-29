import { excludeField } from '@/helper/excludeFields';
import { comparePasswords } from '@/lib/bcrypt';
import { createToken } from '@/lib/jwt';

import { findUserByEmail } from '@/repositories/findUserByEmail';
import { IUser } from 'types/types';

export const loginAction = async (body: IUser) => {
  try {
    const { email, password } = body;
    const userEmail = await findUserByEmail(email);
    if (!userEmail) {
      return {
        status: 400,
        message: 'Email already exist',
      };
    }
    const isPasswordValid = await comparePasswords(
      password,
      userEmail.password,
    );
    if (!isPasswordValid) {
      return {
        status: 400,
        message: 'Invalid password',
      };
    }
    const dataWithoutPassword = excludeField(userEmail, ['password']);
    const token = createToken({ email: userEmail.email });
    return {
      status: 200,
      message: 'Login success',
      data: dataWithoutPassword,
      token,
    };
  } catch (error) {
    throw error;
  }
};
