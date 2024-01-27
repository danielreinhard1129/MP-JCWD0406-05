import { deleteUserRewardById } from '@/repositories/reward/delete';
import { updatePointById } from '@/repositories/reward/updatepoint';

interface Data {
  userRewardId: number;
  pointByUserId: number;
}

export const claimRewardAction = async (data: Data) => {
  try {
    const { userRewardId, pointByUserId } = data;

    if (userRewardId) {
      await deleteUserRewardById(userRewardId);
    }

    if (pointByUserId) {
      await updatePointById(pointByUserId);
    }
    return {
      message: 'claim reward success',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
