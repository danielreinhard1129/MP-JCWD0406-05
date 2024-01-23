import prisma from '@/prisma';

export const findUserByEmail = async (email: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { email },
      include: {
        Point: true,
        UserReward: true,
        role: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
