import { Button, Card } from 'flowbite-react';

const BuyTicket = () => {
  return (
    <Card className="max-w-sm">
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
        IDR 120000
      </p>
      <Button className="bg-teal-600 hover:bg-teal-900">Buy Ticket</Button>
    </Card>
  );
};

export default BuyTicket;
