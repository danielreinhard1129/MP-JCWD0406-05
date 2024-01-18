'use client';
import React, { useEffect } from 'react';
import RegisterCard from './components/RegisterCard';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    if (user?.id) {
      router.push('/');
    }
  }, [user, router]);
  return (
    <main className="container max-w-7xl px-4 mx-auto">
      <section className="mt-20 flex items-center justify-center md: mt-32">
        <RegisterCard />
      </section>
    </main>
  );
};

export default Register;
