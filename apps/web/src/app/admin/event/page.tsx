'use client';

import { FaSearch } from 'react-icons/fa';
import { Checkbox, Table } from 'flowbite-react';

import SidebarPromoter from '../components/SideBar';
import { useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import { baseUrl } from '@/app/baseUrl/baseUrl';
import { useEffect, useState } from 'react';
import { Event } from '@/types/types.user';
const Events = () => {
  const user = useAppSelector((state) => state.user.id);
  const [eventData, setEventData] = useState<Event[]>([]);
  console.log('usk', eventData);

  const geteventbyuserid = async () => {
    try {
      const { data } = await axios.get(baseUrl + `/api/get-event-id/${user}`);
      console.log('asdas', data.data);
      setEventData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      geteventbyuserid();
    }
  }, [user]);

  return (
    <div className="flex w-full">
      <SidebarPromoter activeLink={'events'} />

      <div className="bg-white p-20 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Events
        </h1>
        <div className="mt-4 flex mb-10">
          <div className="flex-1">
            <label htmlFor="search-events" className="sr-only">
              Search events
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search-events"
                id="search-events"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search for events"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="p-4">
                <Checkbox />
              </Table.HeadCell>
              <Table.HeadCell>Event</Table.HeadCell>
              <Table.HeadCell>Sold</Table.HeadCell>
              <Table.HeadCell>Gross</Table.HeadCell>

              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                {eventData.map((item) => {
                  return (
                    <>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item.tittle}
                      </Table.Cell>
                      <Table.Cell>{item.booked}</Table.Cell>
                      <Table.Cell>{item.price}</Table.Cell>

                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-[#ff4b00] hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </Table.Cell>
                    </>
                  );
                })}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Events;
