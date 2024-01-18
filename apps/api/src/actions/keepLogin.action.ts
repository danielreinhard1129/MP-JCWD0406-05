import { excludeField } from '@/helper/excludeFields';
import { findUserByEmail } from '@/repositories/findUserByEmail';

export const keepLoginAction = async (email: string) => {
  try {
    const user = await findUserByEmail(email);

    if (!user) throw new Error('Account not found');

    const dataWithoutPassword = excludeField(user, ['password']);

    return {
      status: 200,
      message: 'keep login success',
      data: dataWithoutPassword,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
