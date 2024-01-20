import { hashPassword } from '@/lib/bcrypt';
import { findUserByEmail } from '@/repositories/findUserByEmail';
import { updateUser } from '@/repositories/updateUser';
import { IData } from 'types/types';

export const resetPasswordAction = async (email: string, data: IData) => {
  try {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) throw new Error('Password not match');
    const user = await findUserByEmail(email);
    if (!user) throw new Error('Account not found');

    const hashedPassword = await hashPassword(password);
    await updateUser(email, { password: hashedPassword });

    return {
      status: 200,
      message: 'Reset password success',
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
