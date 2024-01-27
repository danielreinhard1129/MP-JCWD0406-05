import Link from 'next/link';
import React from 'react';

const TotalPrice = () => {
  return (
    <div className="bg-fix rounded-2xl shadow-xl">
      <div className="md:w-[270px]  p-4">
        <h1 className=" text-[20px] font-medium flex justify-center">
          Total Price
        </h1>
        <hr className="mt-2 border-1 border-black" />
        <div className="mt-2">
          <div className="flex justify-between">
            <text className="font-medium">Ticket</text>
            <text className="font-semibold">IDR 240.000</text>
          </div>
          <div className="flex justify-between">
            <text className="font-medium">Voucher</text>
            <text className="font-semibold">IDR -20.000</text>
          </div>
          <div className="flex justify-between">
            <text className="font-medium">Coin</text>
            <text className="font-semibold">-15.000</text>
          </div>
        </div>
        <hr className="mt-3 border-1 border-black" />
        <div className="mt-2 flex justify-between">
          <text className="font-medium">Total</text>
          <text className="font-semibold">IDR 205.000</text>
        </div>
      </div>
      <Link href="/waitingpayment">
        <button className="w-full bg-fourth shadow-2xl h-[50px] rounded-br-2xl rounded-bl-2xl">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default TotalPrice;
