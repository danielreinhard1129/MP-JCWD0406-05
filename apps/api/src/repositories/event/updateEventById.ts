import prisma from '@/prisma';

export const updateEventByIdRepository = async (
  eventId: number,
  qty: number,
) => {
  try {
    console.log('EVENT ID', eventId, qty);

    const result = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        booked: {
          decrement: qty,
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
