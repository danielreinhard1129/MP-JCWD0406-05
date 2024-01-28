import prisma from '@/prisma';

export const userpoint = async (userId: number) => {
  try {
    // Ambil data poin pengguna
    const userPoints = await prisma.point.findMany({
      where: { userId: userId },
      select: { id: true, amount: true },
      orderBy: { expired: 'asc' }, // Sesuaikan dengan kebutuhan
    });
    return userPoints;
  } catch (error) {
    console.log(error);
  }
};
