'use client';
import React from 'react';
import LoginCard from './components/LoginCard';
import { useAppSelector } from '@/lib/hooks';
import { redirect } from 'next/navigation';
const Register = () => {
  const user = useAppSelector((state) => state.user);
  if (user) {
    redirect('/');
  }
  return (
    <main className="container max-w-7xl px-4 mx-auto">
      <section className="mt-20 flex items-center justify-center md: mt-32">
        <LoginCard />
      </section>
    </main>
  );
};

export default Register;
