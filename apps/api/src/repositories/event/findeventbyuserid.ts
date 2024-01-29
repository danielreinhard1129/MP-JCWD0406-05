import prisma from '@/prisma';

export const findeventbyuseridrepo = async (userId: number) => {
  try {
    const result = await prisma.event.findMany({
      where: { userId },
      include: {
        location: true,
        user: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
