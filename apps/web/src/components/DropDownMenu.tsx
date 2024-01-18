'use client';
import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import { useAppSelector } from '@/lib/hooks';

function DropdownMenu() {
  const user = useAppSelector((state) => state.user);
  return (
    <Dropdown label={user.nama_lengkap} className="text-blue-600">
      <Dropdown.Header>
        <span className="block text-sm">{user.nama_lengkap}</span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item>My Profile</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default DropdownMenu;
