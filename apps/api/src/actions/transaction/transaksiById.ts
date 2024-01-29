import { getTransactionByUserId } from '@/repositories/transaksi/getTransaksiByDate';

export const getTransactionByUserIdAction = async (userId: number) => {
  try {
    const result = await getTransactionByUserId(userId);
    return {
      message: 'get transaction by user id success',
      status: 200,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
