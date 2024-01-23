'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProfileCard from './components/ProfileCard';

const Login = () => {
  const router = useRouter();

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
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
