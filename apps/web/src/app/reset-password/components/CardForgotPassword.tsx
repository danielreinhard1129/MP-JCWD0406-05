'use client';
import React, { useState } from 'react';

import Link from 'next/link';
import FormReset from './FormReset';

const CardForgotPassword = () => {
  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/card1.webp')" }}
          >
            <h1 className="text-white text-3xl mb-3 font-extrabold">
              Embrace the Moment, Conquer the Experience.
            </h1>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 font-extrabold ">
              Reset Your Password
            </h2>

            <FormReset />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForgotPassword;
