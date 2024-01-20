'use client';
import React, { useEffect } from 'react';
import CardForgot from './components/Card';

const Login = () => {
  return (
    <main className="container max-w-7xl px-4 mx-auto">
      <section className="mt-20 flex items-center justify-center md: mt-32">
        <CardForgot />
      </section>
    </main>
  );
};

export default Login;
