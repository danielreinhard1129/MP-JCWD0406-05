import { findRefferalRepo } from '@/repositories/refferal/getRefferalUser';

export const findRefferal = async (refferal: string) => {
  try {
    const data = await findRefferalRepo(refferal);

    if (!data) {
      return {
        status: 404,
        message: 'Not Found Refferal',
      };
    }
    return {
      status: 200,
      message: 'Refferal exist',
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
