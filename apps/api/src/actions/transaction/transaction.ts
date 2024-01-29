import { transporter } from '@/lib/nodemailer';

import path from 'path';

import { statusTransaction } from '@/repositories/transaksi/statusTransaksi';
interface Data {
  uuid: any;
  statusId: number;
  email: string;
}

export const proofTransactionAction = async (data: Data) => {
  try {
    const { uuid, statusId, email } = data;
    const result = await statusTransaction(uuid, statusId);

    const templatePath = path.join(
      __dirname,
      '../../templates',
      'sendmail.hbs',
    );

    await transporter.sendMail({
      from: 'sender',
      to: email,
      subject: 'Yay Payment success',
    });

    return {
      message: 'proof transaction success',
      status: 200,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
