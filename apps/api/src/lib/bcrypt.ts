import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRound = 10;
  return await bcrypt.hash(password, saltRound);
};

export const comparePasswords = async (
  candidatePassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};
