import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="max-w-4xl mt-10 my-10 mx-auto p-2 bg-gray-700 rounded-md shadow-md">
        <Image
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/503/503"
          width={500}
          height={500}
          alt="Concert banner"
          className="w-full h-64"
        />
      </div>
    </>
  );
};

export default Banner;
