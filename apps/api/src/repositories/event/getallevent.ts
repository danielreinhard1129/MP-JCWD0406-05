import prisma from '@/prisma';

export const eventAll = async (id: number) => {
  try {
    const result = await prisma.event.findUnique({
      where: { id },
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
