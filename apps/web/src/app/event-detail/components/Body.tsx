'use client';

import { User } from '@/types/types.user';
import axios, { AxiosError } from 'axios';
import {
  Accordion,
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  Select,
} from 'flowbite-react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const Body = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <div className="px-2 rounded-3xl flex-row ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
            Use Point
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
        </div>
      </div>
      <div>
        <div className="px-2 rounded-3xl mt-4">
          <h1 className="font-bold text-lg">Detail Pembayaran</h1>

          <div>
            <div className="flex justify-between">
              <h1 className="font-medium text-md">Total ticket</h1>
              <h1 className="font-semibold text-md">1.500.000</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-medium text-md">Voucher</h1>
              <h1 className="font-semibold text-md">-</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-medium text-md">Point</h1>
              <h1 className="font-semibold text-md"></h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-medium text-md">Reward</h1>
              <h1 className="font-semibold text-md"></h1>
            </div>
          </div>
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Total Payment</h1>
          </div>
        </div>
        <div className="flex justify-around mt-6 gap-3">
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <ModalHeader />
            <ModalBody>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to cancel?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={() => setOpenModal(false)}>
                    {"Yes, I'm sure"}
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Back
                  </Button>
                </div>
              </div>
            </ModalBody>
          </Modal>
          <Button size="lg" className="w-[200px] rounded-2xl">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Body;
