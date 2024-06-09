"use client"
import React, { useState } from 'react';
import List from '../components/List';
import { ListItem } from '../types';

const initialItems: ListItem[] = [
  {
    id: '1',
    image: '/pic.svg',
    name: 'Scotland Island',
    description: 'Sydney, Australia'
  },
  {
    id: '2',
    image: '/pic2.svg',
    name: 'The Charles Grand Brasserie & Bar',
    description: 'Lorem ipsum, Dolor'
  },
  {
    id: '3',
    image: '/pic3.svg',
    name: 'Bridge Climb',
    description: 'Dolor, Sit amet'
  },
  {
    id: '4',
    image: '/pic4.svg',
    name: 'Clam Bar',
    description: 'Etcetera veni, Vidi vici'
  },
  {
    id: '5',
    image: '/pic5.svg',
    name: 'Vivid Festival',
    description: 'Sydney, Australia'
  },
];

const ListHome = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-4">
        <h1 className="mb-4 text-2xl font-bold text-center">List</h1>
        <List items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default ListHome;
