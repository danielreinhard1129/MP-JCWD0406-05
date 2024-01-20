import react from 'react';
import CardForgotPassword from './components/CardForgotPassword';

const ResetPassword = () => {
  return (
    <main className="container max-w-7xl px-4 mx-auto">
      <section className="mt-20 flex items-center justify-center md: mt-32">
        <CardForgotPassword />
      </section>
    </main>
  );
};

export default ResetPassword;
