import React from 'react';
import Banner from './components/Banner';
import EventInformation from './components/EventInformation';
import BuyTicket from './components/BuyTicket';
import Description from './components/Description';

const EventDetail = () => {
  return (
    <section className="container max-w-6xl mx-auto mt-4 h-[3000px]">
      <div>
        <Banner />
      </div>
      <div className="grid grid-cols-4 gap-4 w-full container max-w-6xl mx-auto mt-4">
        <div className="col-span-3 py-3 px-2">
          <EventInformation />
          <Description />
        </div>
        <div className="sticky top-3 h-[1000px] max-h-[1000px] mt-5">
          <BuyTicket />
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
