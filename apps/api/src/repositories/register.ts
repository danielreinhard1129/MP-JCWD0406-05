import prisma from '@/prisma';
import { IUser } from 'types/types';

export const registerRepo = async (data: IUser, refferalNumber: string) => {
  const { nama_lengkap, username, email, password, roleId } = data;
  try {
    const result = await prisma.user.create({
      data: {
        nama_lengkap,
        username,
        email,
        password,
        roleId,
        refferal_number: refferalNumber,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
