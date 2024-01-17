// import { hashPassword } from '@/lib/bcrypt';

import { hashPassword } from '@/lib/bcrypt';
import { findUserByEmail } from '@/repositories/findUserByEmail';
import { registerRepo } from '@/repositories/register';
import { IUser } from 'types/types';

export const registerAction = async (body: IUser) => {
  try {
    const { email, password } = body;
    const characterRefferal = 'ABCDEFHIJKLMNOPQRSTUFWXYZ1234567890';
    let numberOfRefferal = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characterRefferal.length);
      numberOfRefferal += characterRefferal[randomIndex];
    }
    const userEmail = await findUserByEmail(email);
    if (userEmail) {
      return {
        status: 200,
        message: 'Email already exist',
      };
    }
    // Hashing password
    const hashedPassword = await hashPassword(password);
    body.password = hashedPassword;

    await registerRepo(body, numberOfRefferal);
    return {
      status: 200,
      message: 'Register success',
    };
  } catch (error) {
    throw error;
  }
};
