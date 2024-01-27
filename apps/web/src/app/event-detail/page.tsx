'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Card } from 'flowbite-react';

import { baseUrl } from '../baseUrl/baseUrl';
import axios from 'axios';
import { Event } from '@/types/types.user';
import ModalBody from './components/ModalBody';
import ModalTransaction from './components/ModalTransaction';

const EventDetail: React.FC = () => {
  const [dataEvent, setDataEvent] = useState<Event[]>([]);
  console.log(dataEvent);

  const getAllEvent = async () => {
    try {
      const { data } = await axios.get(baseUrl + '/api/event');
      setDataEvent(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvent();
  }, []);
  return (
    <section className="container max-w-6xl mx-auto mt-4 h-[3000px]">
      {dataEvent.map((item) => {
        return (
          <>
            <div>
              <div className="max-w-4xl mt-10 my-10 mx-auto p-2 bg-gray-700 rounded-md shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/503/503"
                  width={500}
                  height={500}
                  alt="Concert banner"
                  className="w-full h-64"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 w-full container max-w-6xl mx-auto mt-4">
              <div className="col-span-3 py-3 px-2">
                <div className=" mt-5 flex justify-between gap-2">
                  <div className="gap-2">
                    <div className="flex flex-wrap gap-3">
                      {/* <Badge className="bg-[#CB9489]">Category</Badge>
              <Badge className="bg-[#CB9489]">Category</Badge> */}
                    </div>
                    <h1 className="text-3xl mt-2 font-bold">{item.tittle}</h1>
                    <div className="mt-5">
                      <span className="text-lg font-bold"></span>
                      <div className="flex flex-wrap justify-start items-center gap-3 pt-2">
                        <FaCalendarAlt />
                        <span className="font-light">
                          Sat, 20 Jan 2024 09:00 - 17:00 GMT+8
                        </span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <span className="text-lg font-bold">Location</span>
                      <div className=" flex flex-wrap justify-start items-center gap-3 pt-3">
                        <FaMapMarkerAlt />
                        <span className="font-light">Batu Aji</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5">{item.description}</div>
              </div>
              <div className="sticky top-3 h-[1000px] max-h-[1000px] mt-5">
                <Card className="max-w-sm">
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                    {item.price}
                  </p>
                  <ModalTransaction />
                </Card>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default EventDetail;
