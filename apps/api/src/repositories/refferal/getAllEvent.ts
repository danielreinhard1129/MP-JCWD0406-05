import prisma from '@/prisma';

export const getAllEvent = async () => {
  try {
    const result = await prisma.event.findMany();
    return result;
  } catch (error) {
    console.log(error);
  }
};
