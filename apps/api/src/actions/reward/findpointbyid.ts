import prisma from '@/prisma';
import { findpointbyid } from '@/repositories/reward/findpointbyid';

export const findpointaction = async (userId: number) => {
  try {
    const result = await findpointbyid(userId);
    return {
      status: 200,
      message: 'Oke',
      result,
    };
  } catch (error) {
    throw error;
  }
};
