'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProfileCard from './components/ProfileCard';

const Login = () => {
  const token = localStorage.getItem('token');
  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!token || user.roleId == 2) {
      router.replace('/');
    }
  });
  return (
    <>
      <ProfileCard />
    </>
  );
};

export default Login;
