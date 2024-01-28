import prisma from '@/prisma';

export const findRefferalRepo = async (refferal_number?: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { refferal_number },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
