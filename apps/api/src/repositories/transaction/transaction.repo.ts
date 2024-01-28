import prisma from '@/prisma';

export const processTransaksi = async (
  userId: number,
  eventId: number,
  points: number,
  total: number,
  qty: number,
) => {
  try {
    // Jumlahkan poin pengguna dari tabel Point
    const transaction = await prisma.transaction.create({
      data: {
        userId,
        eventId,
        qty,
        total,
        points,
      },
    });
    return transaction;
  } catch (error) {
    console.log(error);
  }
};
