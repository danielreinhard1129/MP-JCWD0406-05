import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const EventInformation = () => {
  return (
    <div className=" mt-5 flex justify-between gap-2">
      <div className="gap-2">
        <div className="flex flex-wrap gap-3">
          {/* <Badge className="bg-[#CB9489]">Category</Badge>
            <Badge className="bg-[#CB9489]">Category</Badge> */}
        </div>
        <h1 className="text-3xl mt-2 font-bold">Event 1</h1>
        <div className="mt-5">
          <span className="text-lg font-bold">Date and Time</span>
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
  );
};

export default EventInformation;
