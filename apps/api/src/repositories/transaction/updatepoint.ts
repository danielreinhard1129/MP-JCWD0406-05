import prisma from '@/prisma';

export const updatePoint = async (
  userId: number,
  remainingClaimAmount: number,
) => {
  try {
    // Ambil data poin pengguna
    const userPoints = await prisma.point.updateMany({
      where: { userId },
      data: { amount: { decrement: remainingClaimAmount } },
    });
    return userPoints;
  } catch (error) {
    console.log(error);
  }
};
