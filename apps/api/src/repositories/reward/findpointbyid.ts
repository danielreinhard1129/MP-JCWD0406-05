import prisma from '@/prisma';

export const findpointbyid = async (userId: number) => {
  try {
    const result = await prisma.point.findUnique({
      where: { userId },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
