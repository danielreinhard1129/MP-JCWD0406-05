import { number, string } from 'yup';

export interface IUser {
  id: number;
  nama_lengkap: string;
  username: string;
  email: string;
  password: string;
  refferal_number: string;
  contact: string;
  alamat: string;
  createdAt: Date;
  updatedAt: Date;
  roleId: number;
  role: Role[];
  Point: IPoint[];
  UserReward: UserReward[];
}

interface Role {
  id: number;
  role: string;
  users: IUser[];
}

export interface IPoint {
  id: number;
  userId: number;
  amount: number; // Jumlah poin yang diperoleh, default diatur ke 0
  expired: any;
}

interface UserReward {
  id: number;
  userId: number;
  rewardId: number;
  createdAt: Date;
  updatedAt: Date;
  expired: Date;
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

export interface ITransaction {
  id: number;
  uuid: string;
  userId: number;
  eventId: number;
  qty: number;
  total: number;
  paymentProof: string;
  points: number;
  createdAt: any;
  updatedAt: Date;
}

export interface Location {
  id: number;
  city: string;
  country: string;
  createdAt: Date;
  Event: Event[];
}

export interface ICategory {
  id: number;
  tittle: string;
}

export interface ITransaction {
  id: number;
  uuid: string;
  userId: number;
  eventId: number;
  statusId: number;
  qty: number;
  paymentImg: string;
  total: number;
  pointsUsed: number;
  createdAt: any;
  updaetdAt: Date;
  status: {
    title: string;
  };
  event: {
    title: string;
  };
  user: {
    username: string;
  };
}
