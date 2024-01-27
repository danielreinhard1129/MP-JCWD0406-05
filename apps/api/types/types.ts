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
  refferal_number: string;
}

export interface IData {
  password: any;
  confirmPassword: any;
}

export interface ITransaction {
  id: number;
  uuid: string;
  userId: number;
  eventId: number;
  qty: number;
  total: number;
  paymentProof: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: number;
  tittle: string;
  description: string;
  price: number;
  locationId: number;
  startDate: Date;
  endDate: Date;
  limit: number;
  booked: number;
  banner: string;
  category: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  user: IUser[];
  location: Location[];
  Transaction: ITransaction[];
}
