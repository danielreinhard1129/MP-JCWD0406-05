'use client';
import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { logoutAction } from '@/lib/feature/userSlice';
import { useRouter } from 'next/navigation';

function DropdownMenu() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
    router.push('/login');
  };
  return (
    <Dropdown label={user.nama_lengkap} className="text-blue-600">
      <Dropdown.Header>
        <span className="block text-sm">{user.nama_lengkap}</span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item>My Profile</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default DropdownMenu;
