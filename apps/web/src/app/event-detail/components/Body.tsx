'use client';

import { baseUrl } from '@/app/baseUrl/baseUrl';
import { useAppSelector } from '@/lib/hooks';
import { Event, IUser, IPoint } from '@/types/types.user';
import axios, { AxiosError } from 'axios';
import {
  Accordion,
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  Select,
} from 'flowbite-react';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const Body: React.FC = () => {
  // const user = useAppSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const [userData, setUserData] = useState<IUser>();
  const [ispoint, setIsPoint] = useState(false);

  const [voucher, setVoucher] = useState(0);
  const [point, setPoint] = useState(0);
  console.log('asdasss', point);

  const [payment, setPayment] = useState(0);
  const [dataEvent, setDataEvent] = useState<Event[]>([]);

  const getAllEvent = async () => {
    try {
      const { data } = await axios.get(baseUrl + '/api/event');
      setDataEvent(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  let totalPoint: any;

  useEffect(() => {
    getAllEvent();
  }, []);

  useEffect(() => {
    const calculatedPayment = dataEvent[0]?.price - point;
    setPayment(calculatedPayment);
  }, [point]);

  useEffect(() => {
    const keepLogin = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(baseUrl + '/api/keeplogin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    keepLogin();
  }, []);

  totalPoint = userData?.Point[0].amount;

  const handlePoint = async () => {
    try {
      setIsPoint(true);
      setPoint(totalPoint);
      alert(`Menambahkan Point success`);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        alert(errorMsg);
      }
    }
  };

  // const handleSubmit = async () => {
  //   try {
  //     await axios.post(baseUrl + '/users/claim-reward', {
  //       userVoucherId,
  //       userRewardId,
  //       pointByUserId: userData?.id,
  //     });
  //     alert(`transaction success`);
  //     alert('/payment');
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       const errorMsg = error.response?.data || error.message;
  //       alert(errorMsg);
  //     }
  //   }
  // };
  return (
    <>
      <div>
        <div className="px-2 rounded-3xl flex-row ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
            onClick={handlePoint}
          >
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
              <h1 className="font-semibold text-md">{dataEvent[0]?.price}</h1>
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
            <h1 className="font-semibold text-md">{payment}</h1>
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
