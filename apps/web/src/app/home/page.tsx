'use client';
import React, { useEffect, useState } from 'react';
import LandingPage from './component/Jumbotron';
import UpcomingEvent from './component/UpcomingEvent';

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <UpcomingEvent />
    </div>
  );
};

export default HomePage;
