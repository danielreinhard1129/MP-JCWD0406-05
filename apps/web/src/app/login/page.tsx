'use client';
import React, { useEffect } from 'react';
import LoginCard from './components/LoginCard';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    if (user?.id) {
      router.replace('/');
    }
  }, [user, router]);
  return (
    <main className="container max-w-7xl px-4 mx-auto">
      <section className="mt-20 flex items-center justify-center md: mt-32">
        <LoginCard />
      </section>
    </main>
  );
};

export default Login;
