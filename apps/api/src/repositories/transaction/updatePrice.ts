import prisma from '@/prisma';

export const updatePoint = async (
  eventId: number,
  remainingEventPrice: number,
) => {
  try {
    // Ambil data poin pengguna
    const userPoints = await prisma.event.update({
      where: { id: eventId },
      data: { price: remainingEventPrice },
    });
    return userPoints;
  } catch (error) {
    console.log(error);
  }
};
