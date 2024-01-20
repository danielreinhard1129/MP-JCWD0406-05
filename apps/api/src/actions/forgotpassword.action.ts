import { excludeField } from '@/helper/excludeFields';
import { createToken } from '@/lib/jwt';
import { transporter } from '@/lib/nodemailer';
import { findUserByEmail } from '@/repositories/findUserByEmail';

export const forgotPasswordAction = async (email: string) => {
  try {
    const user = await findUserByEmail(email);

    if (!user) throw new Error('Account not found');
    const token = createToken({ email: user.email });

    const baseUrl = 'http://localhost:3000';
    const link = baseUrl + `/reset-password?token=${token}`;

    await transporter.sendMail({
      from: 'sender',
      to: email,
      subject: 'Reset password link',
      html: `<a href="${link}" target="_blank">Reset Password Here </a>`,
    });
    return {
      status: 200,
      message: 'send email success',
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
