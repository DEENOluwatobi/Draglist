"use client"
import React, { useState } from 'react';
import List from '../components/List';
import { ListItem } from '../types';

const initialItems: ListItem[] = [
  {
    id: '1',
    image: 'https://via.placeholder.com/150',
    name: 'Item 1',
    description: 'Description for Item 1'
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/150',
    name: 'Item 2',
    description: 'Description for Item 2'
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/150',
    name: 'Item 3',
    description: 'Description for Item 3'
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/150',
    name: 'Item 4',
    description: 'Description for Item 4'
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
