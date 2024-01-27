import { eventAll } from '@/repositories/event/getallevent';
import { getAllEvent } from '@/repositories/refferal/getAllEvent';

export const alleventaction = async () => {
  try {
    const data = await getAllEvent();
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
