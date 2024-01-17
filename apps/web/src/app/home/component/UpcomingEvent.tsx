import { Card } from 'flowbite-react';
import Image from 'next/image';

export default function UpcomingEvent() {
  const events = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Description for Event 1',
      image:
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/500/500', // Placeholder image URL
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Description for Event 2',
      image:
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/501/501', // Placeholder image URL
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'Description for Event 3',
      image:
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://placekitten.com/502/502', // Placeholder image URL
    },
    {
      id: 4,
      title: 'Event 4',
      description: 'Description for Event 4',
      image:
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/503/503', // Placeholder image URL
    },
    {
      id: 5,
      title: 'Event 4',
      description: 'Description for Event 4',
      image:
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/503/503', // Placeholder image URL
    },
  ];

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {events.map((event) => (
        <Card key={event.id} className="bg-white rounded shadow p-4">
          <Image
            src={event.image}
            width={500}
            height={500}
            alt={`Event ${event.id}`}
            className="w-full h-40 object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p>{event.description}</p>
        </Card>
      ))}
    </div>
  );
}
