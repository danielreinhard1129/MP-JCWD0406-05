import prisma from '@/prisma';

export const finduniqueevent = async (eventId: number) => {
  try {
    const event = await prisma.event.findUnique({
      where: { id: eventId },
      select: { price: true },
    });
    return event;
  } catch (error) {
    console.log(error);
  }
};
