import prisma from '@/prisma';

export const findUserByEmail = async (email: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { email },
    });
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    // Disconnect dari Prisma setelah selesai
    await prisma.$disconnect();
  }
};
