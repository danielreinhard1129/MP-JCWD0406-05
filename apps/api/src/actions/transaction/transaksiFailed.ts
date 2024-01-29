import path from 'path';
import fs from 'fs/promises';

import { transporter } from '@/lib/nodemailer';
import { statusTransaction } from '@/repositories/transaksi/statusTransaksi';
import { updateEventByIdRepository } from '@/repositories/event/updateEventById';

interface Data {
  uuid: any;
  statusId: number;
  email: string;
  eventId: number;
  qty: number;
}

export const failedTransactionAction = async (data: Data) => {
  try {
    const { uuid, statusId, email, eventId, qty } = data;
    const result = await statusTransaction(uuid, statusId);
    const updateEvent = await updateEventByIdRepository(eventId, qty);

    const templatePath = path.join(
      __dirname,
      '../../templates',
      'sendmail.hbs',
    );

    const html = compileTemplate({
      icon: 'https://res.cloudinary.com/dge4bmoog/image/upload/v1706064144/failed-icon_gtlq9m.png',
      status: 'Failed',
      msg1: 'We apologize, but it seems there was an issue processing the payment for Order ID # 81279544.',
      msg2: 'Please try again or contact our customer service for further assistance.',
    });

    await transporter.sendMail({
      from: 'sender',
      to: email,
      subject: 'Sorry Payment Failed',
    });

    return {
      message: 'failed transaction success',
      status: 200,
      data: result,
      event: updateEvent,
    };
  } catch (error) {
    throw error;
  }
};
function compileTemplate(arg0: {
  icon: string;
  status: string;
  msg1: string;
  msg2: string;
}) {
  throw new Error('Function not implemented.');
}
