export interface User {
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
  Point: Point[];
  UserReward: UserReward[];
}

interface Role {
  id: number;
  role: string;
  users: User[];
}

interface Point {
  id: number;
  userId: number;
  amount: number; // Jumlah poin yang diperoleh, default diatur ke 0
  expired: Date;
}

interface UserReward {
  id: number;
  userId: number;
  rewardId: number;
  createdAt: Date;
  updatedAt: Date;
  expired: Date;
}
