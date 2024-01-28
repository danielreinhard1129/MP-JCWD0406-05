import { finduniqueevent } from '@/repositories/transaction/findunique.repo';
import { processTransaksi } from '@/repositories/transaction/transaction.repo';
import { ITransaction } from 'types/types';

export const transactionAction = async (data: ITransaction) => {
  try {
    const { userId, eventId, qty, total } = data;

 
       
    
    return {
      status: 200,
      message: 'Create Transaksi sukses',
    };
  } catch (error) {
    throw error;
  }
};
