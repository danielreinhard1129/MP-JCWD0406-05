import prisma from '@/prisma';

export const createVoucher = async (
  userId: number,
  rewardId: number,
  expired: Date,
) => {
  try {
    const result = await prisma.userReward.create({
      data: { userId, rewardId, expired },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
