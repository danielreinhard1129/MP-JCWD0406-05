'use client';
import React, { useState } from 'react';
import { Avatar, Dropdown } from 'flowbite-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { logoutAction } from '@/lib/feature/userSlice';
import { useRouter } from 'next/navigation';

function DropdownMenu() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
    router.replace('/login');
  };
  return (
    <Dropdown label={<Avatar />} className="text-blue-600">
      <Dropdown.Header>
        <span className="block text-sm">Check my profile</span>
      </Dropdown.Header>
      <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default DropdownMenu;
