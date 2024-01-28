import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Kbd,
} from 'flowbite-react';
import React from 'react';
import { FaCoins } from 'react-icons/fa6';

const PriceListComp = () => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-[30px] font-semibold">Billed To</h1>
      <hr className=" mt-2 mb-4 border border-dashed border-black" />
      <text className="font-extrabold text-[20px]">John Doe</text>
      <text>JohnDoe@gmail.com</text>
      <text>081233367821</text>
      <h1 className="text-[30px] font-semibold">Pricing List</h1>
      <hr className=" mt-2 mb-2 border border-dashed border-black" />
      <div className="flex justify-between">
        <div>
          <text className="text-[20px] font-medium">Ticket</text>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="w-fit px-3 rounded-md bg-fix">-</button>
          <Kbd>0</Kbd>
          <button className="w-fit px-3 rounded-md bg-fix">+</button>
        </div>
      </div>
      <div className="flex flex-col">
        <text>IDR 120.000</text>
        <span className="text-[15px] text-[#B45948]">available seats 50</span>
      </div>
      <div className="mt-2">
        <Accordion className="bg-fix">
          <AccordionPanel className="bg-fix">
            <AccordionTitle className="bg-fix">Voucher</AccordionTitle>
            <AccordionContent>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col">
                  <text className="text-[15px]">Voucher IDR 10.000</text>
                  <text className="text-[15px]">From Aldi Taher</text>
                  <text className="text-[15px]">Expired at 30 Feb 2023</text>
                </div>
                <div className="self-center">
                  <button className="bg-fourth rounded-xl py-2 px-1">
                    Use Voucher
                  </button>
                </div>
              </div>
              <hr className="mt-3" />
              <div className="mt-3 flex flex-wrap justify-between">
                <div className="flex flex-col">
                  <text className="text-[15px]">Voucher IDR 10.000</text>
                  <text className="text-[15px]">From Aldi Taher</text>
                  <text className="text-[15px]">Expired at 30 Feb 2023</text>
                </div>
                <div className="self-center">
                  <button className="bg-fourth rounded-xl py-2 px-1">
                    Use Voucher
                  </button>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        <div className="mt-3 flex justify-between">
          <div className="flex flex-wrap gap-2 items-center">
            <FaCoins size={30} />
            <text>15.000 coin</text>
          </div>
          <div>
            <button className="bg-fix py-1 px-3 rounded-lg">use coin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceListComp;
