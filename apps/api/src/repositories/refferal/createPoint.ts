import prisma from '@/prisma';

export const createPoint = async (
  userId: number,
  amount: number,
  expired: Date,
) => {
  try {
    const result = await prisma.point.create({
      data: { userId, amount, expired },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
