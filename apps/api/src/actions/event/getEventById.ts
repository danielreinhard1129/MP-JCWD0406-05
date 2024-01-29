import { findeventbyuseridrepo } from '@/repositories/event/findeventbyuserid';
import { eventAll } from '@/repositories/event/getallevent';
import { getAllEvent } from '@/repositories/refferal/getAllEvent';

export const findeventbyuserid = async (userId: number) => {
  try {
    const data = await findeventbyuseridrepo(userId);
    return {
      status: 200,
      message: 'Success',
      data: data,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
