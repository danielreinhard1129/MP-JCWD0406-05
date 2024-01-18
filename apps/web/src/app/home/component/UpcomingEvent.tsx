import { events } from '@/app/constants';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export default function UpcomingEvent() {
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {events.map((event) => {
        const date = dayjs('2024-02-07T23:00:00').utcOffset(7);
        // Format the date according to the given example
        const formattedDate = date.format('ddd, MMM D • h:mm A [GMT]Z');
        return (
          <Card key={event.id} className="bg-white rounded shadow p-1 relative">
            <Image
              src={event.image}
              width={500}
              height={500}
              alt={`Event ${event.id}`}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{event.title}</h3>
            <span className="text-xs font-bold">{formattedDate}</span>
            <span className="text-xs">{event.location}</span>
            <span className="text-xs">{event.price}</span>
            <p>{event.description}</p>
          </Card>
        );
      })}
    </div>
  );
}
