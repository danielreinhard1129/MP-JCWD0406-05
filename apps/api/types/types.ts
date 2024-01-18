export interface IUser {
  id: number;
  nama_lengkap: string;
  username: string;
  email: string;
  password: string;
  roleId: number;
  point_balance: number;
  createdAt: Date;
  updatedAt: Date;
  contact: number;
  alamat: string;
}
